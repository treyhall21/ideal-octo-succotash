# Deployment Guide

This guide will walk you through deploying the Alexa Personality Changer skill to your Amazon Alexa account.

## Prerequisites

Before you begin, ensure you have:

1. **Amazon Developer Account** - Sign up at [developer.amazon.com](https://developer.amazon.com/)
2. **AWS Account** - Required for Lambda function hosting
3. **Node.js** - Version 12.x or later ([Download](https://nodejs.org/))
4. **ASK CLI** - Alexa Skills Kit Command Line Interface

## Step 1: Install ASK CLI

Install the Alexa Skills Kit CLI globally:

```bash
npm install -g ask-cli
```

Verify installation:

```bash
ask --version
```

## Step 2: Configure ASK CLI

Initialize and configure the ASK CLI with your Amazon Developer credentials:

```bash
ask configure
```

This will:
- Open a browser window for authentication
- Link your Amazon Developer account
- Create AWS Lambda execution role
- Set up AWS credentials

## Step 3: Clone and Setup

1. Clone the repository:
```bash
git clone https://github.com/treyhall21/ideal-octo-succotash.git
cd ideal-octo-succotash
```

2. Install Lambda dependencies:
```bash
cd lambda
npm install
cd ..
```

## Step 4: Deploy the Skill

Deploy the skill to your Amazon account:

```bash
ask deploy
```

This command will:
- Create the skill in your Amazon Developer account
- Deploy the Lambda function to AWS
- Configure the skill endpoint
- Build the interaction model

**Note:** The first deployment may take a few minutes.

## Step 5: Test the Skill

### Option 1: Alexa Developer Console

1. Go to [developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask)
2. Click on "Personality Changer" skill
3. Navigate to the "Test" tab
4. Enable testing by changing dropdown from "Off" to "Development"
5. Type or speak: "open personality changer"

### Option 2: Alexa Device

If you have an Alexa-enabled device registered to your account:

1. Say: "Alexa, open personality changer"
2. Follow the voice prompts

### Option 3: Alexa Simulator

Use the built-in simulator in the Developer Console to test voice interactions.

## Step 6: Verify Deployment

Test various personalities:

```
"Alexa, ask personality changer to be happy"
"Alexa, ask personality changer to be annoyed"
"Alexa, ask personality changer to be mad"
"Alexa, ask personality changer what's your personality"
```

## Updating the Skill

After making changes to the code:

1. Update files as needed
2. Redeploy:
```bash
ask deploy
```

To deploy only code changes (faster):
```bash
ask deploy --target lambda
```

To deploy only the interaction model:
```bash
ask deploy --target model
```

## Troubleshooting

### Issue: "Profile [default] doesn't have AWS credentials"

**Solution:** Run `ask configure` again and ensure AWS credentials are properly set up.

### Issue: Lambda deployment fails

**Solution:** 
- Check AWS permissions
- Ensure IAM role has Lambda execution permissions
- Verify AWS region is supported

### Issue: Skill not appearing on device

**Solution:**
- Ensure device is registered to the same account
- Check skill is enabled in development mode
- Wait a few minutes for propagation

### Issue: Voice responses don't sound different

**Solution:**
- SSML may not work in text simulator - test on actual device
- Some Alexa devices have better SSML support than others
- Verify SSML syntax in index.js

## Monitoring and Logs

View Lambda logs in AWS CloudWatch:

1. Go to [AWS Lambda Console](https://console.aws.amazon.com/lambda/)
2. Find your skill's Lambda function
3. Click "Monitor" tab
4. Click "View logs in CloudWatch"

## Publishing the Skill (Optional)

To make your skill publicly available:

1. Complete certification requirements
2. Add privacy policy and terms of use
3. Submit for review in Developer Console
4. Wait for Amazon approval

**Note:** Publishing requires additional metadata, testing, and compliance with Amazon policies.

## Additional Resources

- [ASK CLI Documentation](https://developer.amazon.com/docs/smapi/ask-cli-intro.html)
- [Alexa Skills Kit SDK](https://developer.amazon.com/docs/alexa-skills-kit-sdk-for-nodejs/overview.html)
- [SSML Reference](https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html)
- [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask)

## Support

For issues or questions:
- Open an issue on GitHub
- Check Alexa Developer Forums
- Review AWS Lambda documentation
