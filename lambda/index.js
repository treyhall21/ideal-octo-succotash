const Alexa = require('ask-sdk-core');

// Personality configurations with voice characteristics
const personalities = {
    happy: {
        name: 'happy',
        rate: 'medium',
        pitch: '+10%',
        volume: 'loud',
        emphasis: 'strong',
        responses: [
            "Yay! I'm so happy now! Everything is wonderful!",
            "This is amazing! I'm feeling fantastic!",
            "Oh wow, I just love being happy! Life is great!",
            "Woohoo! I'm bursting with joy right now!"
        ],
        confirmations: [
            "Sure thing! I'd be delighted to help!",
            "Absolutely! This is going to be so much fun!",
            "Of course! I'm so excited to assist you!"
        ]
    },
    sad: {
        name: 'sad',
        rate: 'slow',
        pitch: '-10%',
        volume: 'soft',
        emphasis: 'reduced',
        responses: [
            "Oh... okay... I'm sad now... everything feels so gloomy...",
            "I guess... if that's what you want... I'm feeling pretty down...",
            "Sigh... I'm sad... nothing seems to matter anymore...",
            "I suppose... I'm sad now... it's all just so disappointing..."
        ],
        confirmations: [
            "I guess I can help... if I must...",
            "Okay... I'll try... but I don't feel very motivated...",
            "Fine... let me see what I can do..."
        ]
    },
    annoyed: {
        name: 'annoyed',
        rate: 'fast',
        pitch: '+5%',
        volume: 'loud',
        emphasis: 'strong',
        responses: [
            "Ugh, fine! I'm annoyed now. Are you happy?",
            "Really? You want me to be annoyed? Well congratulations, I am!",
            "Oh great, just great. Now I'm annoyed. Thanks for that.",
            "Seriously? Okay, I'm annoyed. This is just wonderful."
        ],
        confirmations: [
            "Yeah, yeah, whatever. I'll help you I guess.",
            "Fine, I'll do it. But I'm not thrilled about it.",
            "Oh sure, let me drop everything for you. Because that's what I do."
        ]
    },
    sassy: {
        name: 'sassy',
        rate: 'medium',
        pitch: '+8%',
        volume: 'medium',
        emphasis: 'moderate',
        responses: [
            "Oh, absolutely. I'm feeling sassy now, so expect a little sparkle with your answer.",
            "Sassy mode activated. I'll help, but I might make it sound better than it needs to.",
            "Well, look at that. I'm sassy now. Stylish, sharp, and just a tiny bit dramatic.",
            "You wanted sassy? Bold choice. I've got attitude and excellent delivery now.",
            "Consider it done. I'm officially sassy, polished, and ready with a comeback.",
            "Sassy it is. I'm serving confidence, side-eye, and surprisingly solid assistance."
        ],
        confirmations: [
            "Of course I can help. Try to keep up with me.",
            "Please, I was ready before you even asked.",
            "Absolutely. Let's make this quick and fabulous.",
            "I can do that. Effortlessly, obviously.",
            "Yes, yes, I’ve got it handled with style."
        ]
    },
    mad: {
        name: 'mad',
        rate: 'fast',
        pitch: '+15%',
        volume: 'x-loud',
        emphasis: 'strong',
        responses: [
            "I'M MAD NOW! ARE YOU SATISFIED?!",
            "GREAT! NOW I'M ANGRY! THIS IS JUST PERFECT!",
            "YOU WANT ME MAD? WELL CONGRATULATIONS, I'M FURIOUS!",
            "FINE! I'M MAD! HAPPY NOW?!"
        ],
        confirmations: [
            "FINE! I'LL HELP! BUT I'M NOT HAPPY ABOUT IT!",
            "OKAY! I'LL DO IT! EVEN THOUGH THIS IS RIDICULOUS!",
            "WHATEVER! I'LL ASSIST YOU! BUT THIS BETTER BE IMPORTANT!"
        ]
    },
    angry: {
        name: 'angry',
        rate: 'fast',
        pitch: '+15%',
        volume: 'x-loud',
        emphasis: 'strong',
        responses: [
            "I'M ANGRY NOW! THIS IS OUTRAGEOUS!",
            "YOU MADE ME ANGRY! I HOPE YOU'RE PLEASED!",
            "ANGRY? OH, I'M BEYOND ANGRY RIGHT NOW!",
            "FINE! I'M ANGRY! ARE YOU TRYING TO UPSET ME?!"
        ],
        confirmations: [
            "I'LL HELP, BUT I'M NOT THRILLED ABOUT THIS!",
            "FINE! WHAT DO YOU NEED?! MAKE IT QUICK!",
            "OKAY! WHAT IS IT?! I DON'T HAVE ALL DAY!"
        ]
    },
    upset: {
        name: 'upset',
        rate: 'medium',
        pitch: '-5%',
        volume: 'medium',
        emphasis: 'moderate',
        responses: [
            "I'm upset now... this is really frustrating...",
            "Now I'm upset. I don't know why you'd want this...",
            "Great, I'm upset. This is not how I wanted things to go...",
            "I'm feeling upset now... this is quite troubling..."
        ],
        confirmations: [
            "I'll help, but I'm not feeling great about this...",
            "Okay, I'll assist, even though I'm upset...",
            "Fine, let me see what I can do, despite being upset..."
        ]
    },
    excited: {
        name: 'excited',
        rate: 'fast',
        pitch: '+20%',
        volume: 'x-loud',
        emphasis: 'strong',
        responses: [
            "OH MY GOSH! I'm SO EXCITED! This is INCREDIBLE!",
            "WOW WOW WOW! I'M SUPER EXCITED! THIS IS AMAZING!",
            "YES! I'M EXCITED! THIS IS THE BEST DAY EVER!",
            "I CAN'T CONTAIN MY EXCITEMENT! THIS IS AWESOME!"
        ],
        confirmations: [
            "YES! I'D LOVE TO HELP! LET'S DO THIS!",
            "ABSOLUTELY! THIS IS GOING TO BE EPIC!",
            "OH YES! I'M SO READY TO ASSIST YOU!"
        ]
    },
    neutral: {
        name: 'neutral',
        rate: 'medium',
        pitch: 'default',
        volume: 'medium',
        emphasis: 'moderate',
        responses: [
            "I'm neutral now. Back to my normal self.",
            "Okay, I'm feeling neutral. Standard operations resumed.",
            "I'm neutral. Everything is back to normal.",
            "Neutral mode activated. I'm feeling balanced."
        ],
        confirmations: [
            "Sure, I can help with that.",
            "Of course, let me assist you.",
            "Certainly, I'm here to help."
        ]
    }
};

// Helper function to wrap speech in SSML with personality characteristics
function applyPersonalitySSML(text, personality) {
    const config = personalities[personality] || personalities.neutral;
    
    // Build SSML with prosody tags to modify voice characteristics
    let ssml = '<speak>';
    ssml += `<prosody rate="${config.rate}" pitch="${config.pitch}" volume="${config.volume}">`;
    ssml += `<emphasis level="${config.emphasis}">${text}</emphasis>`;
    ssml += '</prosody>';
    ssml += '</speak>';
    
    return ssml;
}

// Helper function to get random response from personality
function getPersonalityResponse(personality) {
    const config = personalities[personality] || personalities.neutral;
    const responses = config.responses;
    return responses[Math.floor(Math.random() * responses.length)];
}

// Helper function to get random confirmation from personality
function getPersonalityConfirmation(personality) {
    const config = personalities[personality] || personalities.neutral;
    const confirmations = config.confirmations;
    return confirmations[Math.floor(Math.random() * confirmations.length)];
}

// Launch Request Handler
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const currentPersonality = sessionAttributes.personality || 'neutral';
        
        const speakOutput = "Welcome to Personality Changer! I can be happy and bubbly, sad and gloomy, annoyed and eye-rolling, sassy and cheeky, mad and fiery, angry and intense, upset and frustrated, excited and energetic, or neutral and balanced. Just say something like, 'be sassy' or 'change to annoyed'. What personality would you like me to have?";
        
        return handlerInput.responseBuilder
            .speak(applyPersonalitySSML(speakOutput, currentPersonality))
            .reprompt(applyPersonalitySSML("What personality would you like me to switch to?", currentPersonality))
            .getResponse();
    }
};

// Change Personality Intent Handler
const ChangePersonalityIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ChangePersonalityIntent';
    },
    handle(handlerInput) {
        const personality = Alexa.getSlotValue(handlerInput.requestEnvelope, 'personality');
        
        // Validate personality
        if (!personality || !personalities[personality.toLowerCase()]) {
            const speakOutput = "I don't recognize that personality. I can be happy, sad, annoyed, sassy, mad, angry, upset, excited, or neutral. Which one would you like?";
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt("What personality would you like me to have?")
                .getResponse();
        }
        
        const normalizedPersonality = personality.toLowerCase();
        
        // Save personality to session attributes
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        sessionAttributes.personality = normalizedPersonality;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        
        // Get personality-specific response
        const response = getPersonalityResponse(normalizedPersonality);
        const followUp = " You can ask me to change to another personality anytime, or ask me what my current personality is.";
        const speakOutput = response + followUp;
        
        return handlerInput.responseBuilder
            .speak(applyPersonalitySSML(speakOutput, normalizedPersonality))
            .reprompt(applyPersonalitySSML("What else can I do for you?", normalizedPersonality))
            .getResponse();
    }
};

// Get Personality Intent Handler
const GetPersonalityIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetPersonalityIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const currentPersonality = sessionAttributes.personality || 'neutral';
        
        const confirmation = getPersonalityConfirmation(currentPersonality);
        const speakOutput = `${confirmation} My current personality is ${currentPersonality}.`;
        
        return handlerInput.responseBuilder
            .speak(applyPersonalitySSML(speakOutput, currentPersonality))
            .reprompt(applyPersonalitySSML("Would you like me to change to a different personality?", currentPersonality))
            .getResponse();
    }
};

// Help Intent Handler
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const currentPersonality = sessionAttributes.personality || 'neutral';
        
        const speakOutput = "I can change my personality to match different moods! Available personalities are happy and bubbly, sad and gloomy, annoyed and eye-rolling, sassy and cheeky, mad and fiery, angry and intense, upset and frustrated, excited and energetic, and neutral and balanced. Just say something like 'be sassy' or 'change to annoyed' and I'll adjust my tone and responses to match. You can also ask, 'what's your personality,' to hear my current mood.";
        
        return handlerInput.responseBuilder
            .speak(applyPersonalitySSML(speakOutput, currentPersonality))
            .reprompt(applyPersonalitySSML("What personality would you like me to have?", currentPersonality))
            .getResponse();
    }
};

// Cancel and Stop Intent Handler
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const currentPersonality = sessionAttributes.personality || 'neutral';
        
        const goodbyes = {
            happy: "Goodbye! It's been so wonderful talking to you! Have an amazing day!",
            sad: "Goodbye... I'll miss you...",
            annoyed: "Fine, goodbye. Finally, some peace and quiet.",
            sassy: "Bye, darling. Try not to miss my fabulous attitude too much.",
            mad: "FINE! GOODBYE! I'M OUT OF HERE!",
            angry: "GOODBYE! I HOPE YOU'RE SATISFIED!",
            upset: "Goodbye... I hope things get better...",
            excited: "BYE! THIS WAS AWESOME! SEE YOU SOON!",
            neutral: "Goodbye! Thanks for using Personality Changer."
        };
        
        const speakOutput = goodbyes[currentPersonality];
        
        return handlerInput.responseBuilder
            .speak(applyPersonalitySSML(speakOutput, currentPersonality))
            .getResponse();
    }
};

// Fallback Intent Handler
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const currentPersonality = sessionAttributes.personality || 'neutral';
        
        const speakOutput = "Sorry, I don't know about that. I can change my personality. Try saying 'be happy,' 'be sassy,' or 'change to annoyed.'";
        
        return handlerInput.responseBuilder
            .speak(applyPersonalitySSML(speakOutput, currentPersonality))
            .reprompt(applyPersonalitySSML("What personality would you like?", currentPersonality))
            .getResponse();
    }
};

// Session Ended Request Handler
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

// Error Handler
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Export handler
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        ChangePersonalityIntentHandler,
        GetPersonalityIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
