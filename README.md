# Alexa Personality Changer Skill

An Amazon Alexa skill that allows Alexa to change personalities and moods with matching voice tones and character responses.

## Overview

This skill enables users to change Alexa's personality to different moods including:
- **Happy** - Cheerful, enthusiastic, and upbeat
- **Sad** - Gloomy, disappointed, and down
- **Annoyed** - Sarcastic, obnoxious, and irritated
- **Mad/Angry** - Furious, loud, and aggressive
- **Upset** - Frustrated and troubled
- **Excited** - Energetic, enthusiastic, and thrilled
- **Neutral** - Standard, balanced responses

Each personality includes:
- **Voice tone modifications** using SSML (Speech Synthesis Markup Language)
- **Personality-specific responses** that match the mood
- **Dynamic pitch, rate, and volume adjustments**

## Features

- **8 Different Personalities**: Each with unique voice characteristics and responses
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
├── models/
│   └── en-US.json        # Voice interaction model
├── skill.json            # Skill manifest
├── LICENSE
└── README.md
```

## Usage Examples

Once deployed, users can interact with the skill using these voice commands:

- "Alexa, open personality changer"
- "Alexa, ask personality changer to be happy"
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

- [Amazon Developer Account](https://developer.amazon.com/) (required)
- [AWS Account](https://aws.amazon.com/) (for custom hosting, not required for Alexa-hosted)

### Deployment Options

#### Option 1: Import from GitHub (Recommended - Easiest)

This is the fastest way to deploy the skill using Alexa-hosted services:

1. **Go to the Alexa Developer Console:**
   - Visit [developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask)
   - Sign in with your Amazon Developer account

2. **Create a new skill:**
   - Click "Create Skill"
   - Enter skill name: "Personality Changer"
   - Choose "Custom" model
   - Choose "Alexa-hosted (Node.js)" for hosting
   - Click "Import Skill"

3. **Import from GitHub:**
   - Enter the repository URL: `https://github.com/treyhall21/ideal-octo-succotash`
   - Click "Import"
   - Wait for the import to complete (this may take a few minutes)

4. **Build and test:**
   - The skill will be automatically configured with the correct interaction model and Lambda code
   - Click "Build" to build the interaction model
   - Go to the "Test" tab and enable testing
   - Try saying: "Alexa, open personality changer"

#### Option 2: Manual Deployment with ASK CLI

For advanced users who want more control:

1. **Install and configure ASK CLI:**
   ```bash
   npm install -g ask-cli
   ask configure
   ```

2. **Clone the repository:**
   ```bash
   git clone https://github.com/treyhall21/ideal-octo-succotash.git
   cd ideal-octo-succotash
   ```

3. **Deploy the skill:**
   ```bash
   ask deploy
   ```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

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

Then update the interaction model in `models/en-US.json` to include the new personality type.

### Modifying Voice Characteristics

Adjust SSML parameters in the `applyPersonalitySSML` function to fine-tune voice characteristics.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository.

## Acknowledgments

- Built with [Alexa Skills Kit SDK for Node.js](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
- Uses SSML for voice modulation
