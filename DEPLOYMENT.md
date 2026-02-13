# Deployment Guide

This guide covers multiple ways to deploy the Alexa Personality Changer skill to your Amazon Alexa account.

## Method 1: Import from GitHub (Recommended)

This is the easiest way to deploy the skill using Alexa-hosted services. No AWS account or ASK CLI required!

### Prerequisites

- Amazon Developer Account (free) - [Sign up here](https://developer.amazon.com/)

### Step-by-Step Instructions

#### Step 1: Access Alexa Developer Console

1. Go to [developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask)
2. Sign in with your Amazon Developer account
3. If prompted, complete your developer profile

#### Step 2: Create New Skill

1. Click the **"Create Skill"** button
2. Enter the skill name: **"Personality Changer"**
3. Choose your default language (e.g., **English (US)**)
4. Choose **"Custom"** as the model
5. Choose **"Alexa-hosted (Node.js)"** as the hosting method
6. Click **"Import Skill"** at the top right

#### Step 3: Import from GitHub

1. In the import dialog, enter the repository URL:
   ```
   https://github.com/treyhall21/ideal-octo-succotash
   ```
2. Click **"Import"**
3. Wait for the import process to complete (typically 1-3 minutes)
4. The skill will automatically import:
   - Skill manifest (`skill.json`)
   - Interaction model (`models/en-US.json`)
   - Lambda code (`lambda/index.js` and dependencies)

#### Step 4: Build the Skill

1. Once import is complete, click **"Build"** tab
2. Click **"Build Model"** button
3. Wait for the build to complete (this validates your interaction model)

#### Step 5: Test the Skill

1. Navigate to the **"Test"** tab
2. Enable testing by changing the dropdown from **"Off"** to **"Development"**
3. Try these test phrases:
   - Type or say: `"open personality changer"`
   - Type or say: `"ask personality changer to be happy"`
   - Type or say: `"ask personality changer to be annoyed"`

#### Step 6: Test on Your Device

If you have an Alexa-enabled device registered to your Amazon account:
- Say: `"Alexa, open personality changer"`
- The skill will work immediately in development mode

### Updating Your Skill

When the GitHub repository is updated, you can sync changes:

1. Go to the **"Code"** tab in the Developer Console
2. Click **"Import"** again with the same GitHub URL
3. Or use the built-in code editor to make changes directly

---

## Method 2: Manual Deployment with ASK CLI

For advanced users who want more control or prefer command-line tools.

### Prerequisites

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

### Method 1: GitHub Import Issues

#### Issue: "There was an issue importing your skill"

**Solution:**
- Verify the repository URL is correct: `https://github.com/treyhall21/ideal-octo-succotash`
- Ensure the repository is public
- Check that the repository has the correct structure (skill.json at root, models/ folder, lambda/ folder)
- Try importing again after a few minutes

#### Issue: "Build failed" after import

**Solution:**
- Check the Build tab for specific error messages
- Ensure `models/en-US.json` has valid interaction model syntax
- Verify all required intents are properly defined

### Method 2: ASK CLI Issues

#### Issue: "Profile [default] doesn't have AWS credentials"

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

After successful development and testing, you can publish your skill to make it available to all Alexa users:

1. Complete all certification requirements
2. Add privacy policy and terms of use URLs
3. Provide skill icons and images
4. Fill out distribution information
5. Submit for review in Developer Console
6. Wait for Amazon certification team approval

**Note:** Publishing requires additional metadata, testing, and compliance with Amazon's certification requirements.

## Additional Resources

- [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask)
- [Alexa-Hosted Skills Documentation](https://developer.amazon.com/docs/hosted-skills/build-a-skill-end-to-end-using-an-alexa-hosted-skill.html)
- [ASK CLI Documentation](https://developer.amazon.com/docs/smapi/ask-cli-intro.html)
- [Alexa Skills Kit SDK](https://developer.amazon.com/docs/alexa-skills-kit-sdk-for-nodejs/overview.html)
- [SSML Reference](https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html)

## Support

For issues or questions:
- Open an issue on the [GitHub repository](https://github.com/treyhall21/ideal-octo-succotash/issues)
- Check [Alexa Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html)
- Review [Alexa Skills Kit documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
