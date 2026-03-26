# Alexa Personality Changer Skill

An Amazon Alexa skill that allows Alexa to change personalities and moods with matching voice tones and character responses.

## Overview

This skill enables users to change Alexa's personality to different moods including:
- **Happy** - Cheerful, enthusiastic, and upbeat
- **Sad** - Gloomy, disappointed, and down
- **Annoyed** - Sarcastic, obnoxious, and irritated
- **Sassy** - Cheeky, witty, and confident
- **Mad/Angry** - Furious, loud, and aggressive
- **Upset** - Frustrated and troubled
- **Excited** - Energetic, enthusiastic, and thrilled
- **Neutral** - Standard, balanced responses

Each personality includes:
- **Voice tone modifications** using SSML (Speech Synthesis Markup Language)
- **Personality-specific responses** that match the mood
- **Dynamic pitch, rate, and volume adjustments**

## Features

- **9 Different Personalities**: Each with unique voice characteristics and responses
- **SSML Voice Modulation**: Automatic adjustment of pitch, rate, volume, and emphasis
- **Context-Aware Responses**: Different responses for different interactions
- **Session Persistence**: Personality persists throughout the session
- **Natural Voice Commands**: Multiple ways to request personality changes

## Project Structure

```
ideal-octo-succotash/
├── lambda/
│   ├── index.js          # Main Lambda function with skill logic
│   └── package.json      # Node.js dependencies
├── skill-package/
│   ├── skill.json        # Skill manifest
│   └── interactionModels/
│       └── custom/
│           └── en-US.json  # Voice interaction model
├── LICENSE
└── README.md
```

## Usage Examples

Once deployed, users can interact with the skill using these voice commands:

- "Alexa, open personality changer"
- "Alexa, ask personality changer to be happy"
- "Alexa, ask personality changer to be sassy"
- "Alexa, tell personality changer to change to annoyed"
- "Alexa, ask personality changer to be mad"
- "Alexa, ask personality changer what's your personality"

### Example Interactions

**Happy Personality:**
```
User: "Alexa, ask personality changer to be happy"
Alexa: [cheerful tone] "Yay! I'm so happy now! Everything is wonderful!"
```

**Annoyed Personality:**
```
User: "Alexa, tell personality changer to be annoyed"
Alexa: [sarcastic tone] "Ugh, fine! I'm annoyed now. Are you happy?"
```

**Sassy Personality:**
```
User: "Alexa, ask personality changer to be sassy"
Alexa: [playful, cheeky tone] "Sassy mode activated. I'll help, but I might make it sound better than it needs to."
```

**Mad Personality:**
```
User: "Alexa, ask personality changer to be mad"
Alexa: [loud, angry tone] "I'M MAD NOW! ARE YOU SATISFIED?!"
```

## Technical Details

### Voice Modulation (SSML)

Each personality uses SSML tags to modify voice characteristics:

- **Rate**: slow, medium, fast
- **Pitch**: -10% to +20%
- **Volume**: soft, medium, loud, x-loud
- **Emphasis**: reduced, moderate, strong

### Personality Configurations

Each personality includes:
- Voice characteristics (rate, pitch, volume, emphasis)
- Multiple response variations
- Contextual confirmations
- Goodbye messages

## Installation & Deployment

### Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [AWS Account](https://aws.amazon.com/)
- [Amazon Developer Account](https://developer.amazon.com/)
- [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) (Alexa Skills Kit Command Line Interface)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/treyhall21/ideal-octo-succotash.git
   cd ideal-octo-succotash
   ```

2. **Install dependencies:**
   ```bash
   cd lambda
   npm install
   cd ..
   ```

3. **Configure ASK CLI:**
   ```bash
   ask configure
   ```

4. **Deploy the skill:**
   ```bash
   ask deploy
   ```

5. **Test the skill:**
   - Use the Alexa Developer Console
   - Test on an Alexa-enabled device
   - Use the Alexa Simulator

### Local Testing

To test the Lambda function locally, you can use the Alexa Skills Kit SDK Test framework or create test events.

## Development

### Adding New Personalities

To add a new personality, edit `lambda/index.js` and add a new entry to the `personalities` object:

```javascript
newpersonality: {
    name: 'newpersonality',
    rate: 'medium',
    pitch: 'default',
    volume: 'medium',
    emphasis: 'moderate',
    responses: [
        "Response 1",
        "Response 2"
    ],
    confirmations: [
        "Confirmation 1",
        "Confirmation 2"
    ]
}
```

Then update the interaction model in `skill-package/interactionModels/custom/en-US.json` to include the new personality type.

### Modifying Voice Characteristics

Adjust SSML parameters in the `applyPersonalitySSML` function to fine-tune voice characteristics.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository.

## Acknowledgments

- Built with [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
- Uses SSML for voice modulation
