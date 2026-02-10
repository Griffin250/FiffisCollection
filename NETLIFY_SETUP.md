# Netlify Deployment Setup Guide

## Prerequisites
- Netlify account (sign up at https://netlify.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- All environment variables ready

## Step 1: Prepare Environment Variables

### Firebase Credentials
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **auth-af925**
3. Click Settings (gear icon) > Project settings
4. Copy all values from the **Web API key** section:
   - API Key → `VITE_FIREBASE_API_KEY_AUTH`
   - Auth Domain → `VITE_FIREBASE_AUTH_DOMAIN_AUTH`
   - Database URL → `VITE_FIREBASE_DATABASE_URL_AUTH`
   - Project ID → `VITE_FIREBASE_PROJECT_ID_AUTH`
   - Storage Bucket → `VITE_FIREBASE_STORAGE_BUCKET_AUTH`
   - Messaging Sender ID → `VITE_FIREBASE_MESSAGING_SENDER_ID_AUTH`
   - App ID → `VITE_FIREBASE_APP_ID_AUTH`

5. Repeat for **loginform-958a4** project → Use `_DB` suffix for variable names

### Stripe Credentials
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to API Keys section
3. Copy:
   - **Publishable Key** → `VITE_STRIPE_PUBLIC_KEY`
   - **Secret Key** → `VITE_STRIPE_SECRET_KEY`

### Google OAuth (Optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Copy Client ID → `VITE_GOOGLE_CLIENT_ID`

## Step 2: Update .env File
Edit `.env` file with your actual credentials:
```
VITE_FIREBASE_API_KEY_AUTH=your_actual_key
VITE_FIREBASE_AUTH_DOMAIN_AUTH=your_domain
# ... (all other variables)
VITE_STRIPE_PUBLIC_KEY=pk_live_your_key
VITE_STRIPE_SECRET_KEY=sk_live_your_key
```

## Step 3: Deploy to Netlify

### Option A: Connect Git Repository
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Choose your Git provider
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build` (or your build command)
   - **Publish directory**: `dist` or your output directory
6. Click "Deploy site"

### Option B: Manual Deploy (Drag & Drop)
1. Build your project locally:
   ```bash
   npm run build
   ```
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Drag and drop your `dist` folder
4. Site will be deployed (but environment variables won't be set)

## Step 4: Set Environment Variables in Netlify

1. Go to your site's **Site settings** > **Build & deploy** > **Environment**
2. Click "Edit variables"
3. Add all your environment variables:
   - `VITE_FIREBASE_API_KEY_AUTH` = your_value
   - `VITE_FIREBASE_AUTH_DOMAIN_AUTH` = your_value
   - (Continue for all variables)
4. Click "Save"

### Using Netlify UI
1. Site settings → Environment variables
2. Add each variable from your `.env` file

### Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Set environment variables
netlify env:set VITE_FIREBASE_API_KEY_AUTH "your_key"
netlify env:set VITE_STRIPE_PUBLIC_KEY "pk_live_your_key"
# ... (set all variables)

# Deploy
netlify deploy --prod
```

## Step 5: Verify Deployment

1. Go to your Netlify site URL
2. Open browser console (F12)
3. Check for any errors related to Firebase or Stripe initialization
4. Test Firebase login functionality
5. Test Stripe payment functionality

## Troubleshooting

### Environment Variables Not Loading
- Ensure variable names match exactly (case-sensitive)
- Variables must start with `VITE_` to be exposed to frontend
- Redeploy after setting variables

### Firebase Not Initializing
- Check Firebase credentials are correct
- Ensure domain is whitelisted in Firebase Console
- Check browser console for errors

### CORS Issues
- Add your Netlify domain to Firebase authorized domains
- Go to Firebase Console → Authentication → Settings → Authorized domains
- Add your Netlify domain (e.g., `your-site.netlify.app`)

### Stripe Issues
- Verify API keys are in correct format (pk_live_... for public)
- Check Stripe is properly loaded before use
- Test in Stripe's test mode first with test keys

## Security Best Practices

1. **Never commit `.env` file** - Already added to `.gitignore`
2. **Use environment variables** - All sensitive data should be in .env
3. **Rotate keys regularly** - Update Stripe and Firebase keys periodically
4. **Enable 2FA** - On Firebase, Stripe, and Netlify accounts
5. **Monitor usage** - Check Firebase and Stripe dashboards for unusual activity
6. **Use separate keys for dev/prod** - Different Firebase/Stripe projects for development

## SSL/HTTPS
- Netlify automatically provides HTTPS certificate
- All traffic will be encrypted
- No additional setup needed

## Custom Domain
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed
4. Verify domain

## Redeploy
```bash
git push  # Triggers automatic redeploy if connected to Git
# or
netlify deploy --prod  # Manual redeploy
```

## Support
- Netlify Docs: https://docs.netlify.com/
- Firebase Docs: https://firebase.google.com/docs/
- Stripe Docs: https://stripe.com/docs/
