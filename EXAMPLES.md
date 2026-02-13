# Alexa Personality Skill - Examples

## Personality Demonstrations

### Happy Personality
**User:** "Alexa, ask personality changer to be happy"

**Alexa Response:**
- Voice: Medium rate, high pitch (+10%), loud volume, strong emphasis
- Text: "Yay! I'm so happy now! Everything is wonderful! You can ask me to change to another personality anytime, or ask me what my current personality is."

### Sad Personality
**User:** "Alexa, tell personality changer to become sad"

**Alexa Response:**
- Voice: Slow rate, low pitch (-10%), soft volume, reduced emphasis
- Text: "Oh... okay... I'm sad now... everything feels so gloomy... You can ask me to change to another personality anytime, or ask me what my current personality is."

### Annoyed Personality
**User:** "Alexa, ask personality changer to be annoyed"

**Alexa Response:**
- Voice: Fast rate, slightly high pitch (+5%), loud volume, strong emphasis
- Text: "Ugh, fine! I'm annoyed now. Are you happy? You can ask me to change to another personality anytime, or ask me what my current personality is."

### Mad/Angry Personality
**User:** "Alexa, ask personality changer to be mad"

**Alexa Response:**
- Voice: Fast rate, very high pitch (+15%), extra loud volume, strong emphasis
- Text: "I'M MAD NOW! ARE YOU SATISFIED?! You can ask me to change to another personality anytime, or ask me what my current personality is."

### Upset Personality
**User:** "Alexa, tell personality changer to be upset"

**Alexa Response:**
- Voice: Medium rate, slightly low pitch (-5%), medium volume, moderate emphasis
- Text: "I'm upset now... this is really frustrating... You can ask me to change to another personality anytime, or ask me what my current personality is."

### Excited Personality
**User:** "Alexa, ask personality changer to be excited"

**Alexa Response:**
- Voice: Fast rate, very high pitch (+20%), extra loud volume, strong emphasis
- Text: "OH MY GOSH! I'm SO EXCITED! This is INCREDIBLE! You can ask me to change to another personality anytime, or ask me what my current personality is."

### Neutral Personality
**User:** "Alexa, tell personality changer to be neutral"

**Alexa Response:**
- Voice: Medium rate, default pitch, medium volume, moderate emphasis
- Text: "I'm neutral now. Back to my normal self. You can ask me to change to another personality anytime, or ask me what my current personality is."

## Query Current Personality

**User:** "Alexa, ask personality changer what's your personality"

**Alexa Response (varies by current personality):**
- Happy: [cheerful] "Absolutely! This is going to be so much fun! My current personality is happy."
- Sad: [gloomy] "I guess I can help... if I must... My current personality is sad."
- Annoyed: [sarcastic] "Yeah, yeah, whatever. I'll help you I guess. My current personality is annoyed."
- Mad: [angry] "FINE! I'LL HELP! BUT I'M NOT HAPPY ABOUT IT! My current personality is mad."

## Help Command

**User:** "Alexa, ask personality changer for help"

**Alexa Response (in current personality voice):**
"I can change my personality to match different moods! Available personalities are: happy, sad, annoyed, mad, angry, upset, excited, and neutral. Just say something like 'be happy' or 'change to annoyed' and I'll adjust my tone and responses to match! You can also ask 'what's your personality' to see my current mood."

## Stopping/Canceling

**User:** "Alexa, stop"

**Alexa Response (varies by personality):**
- Happy: [cheerful] "Goodbye! It's been so wonderful talking to you! Have an amazing day!"
- Sad: [gloomy] "Goodbye... I'll miss you..."
- Annoyed: [sarcastic] "Fine, goodbye. Finally, some peace and quiet."
- Mad: [angry] "FINE! GOODBYE! I'M OUT OF HERE!"
- Excited: [energetic] "BYE! THIS WAS AWESOME! SEE YOU SOON!"
- Neutral: [standard] "Goodbye! Thanks for using Personality Changer."

## Technical Details

### SSML Tags Used

Each response is wrapped with SSML tags for voice modulation:

```xml
<speak>
  <prosody rate="fast" pitch="+10%" volume="loud">
    <emphasis level="strong">
      Yay! I'm so happy now! Everything is wonderful!
    </emphasis>
  </prosody>
</speak>
```

### Session Attributes

The skill maintains session state using session attributes:
- `personality`: Current personality (e.g., "happy", "sad", "annoyed")

This ensures the personality persists throughout the conversation until changed or the session ends.
