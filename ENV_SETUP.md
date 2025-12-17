# Environment Variables Setup

## Web3Forms API Key Configuration

To protect your Web3Forms API key from being exposed in client-side code, you need to set it up as an environment variable.

### Step 1: Create `.env.local` file

Create a new file in the project root called `.env.local` (it's already in `.gitignore` so it won't be committed):

```bash
# In the project root directory
touch .env.local
```

### Step 2: Add your API key

Open `.env.local` and add:

```env
WEB3FORMS_ACCESS_KEY=8cbaf783-1759-459e-b13c-88d04a120c48
```

**Replace the value with your actual Web3Forms access key from https://web3forms.com/**

### Step 3: Restart your development server

```bash
npm run dev
```

## How It Works

1. **Client-side forms** (`contact/page.tsx`, `premium-feature-modal.tsx`) now call `/api/contact`
2. **Server-side API route** (`app/api/contact/route.ts`) reads the key from environment variables
3. **API route forwards** the request to Web3Forms with the secure key
4. **Browser never sees** the actual API key

## Security Benefits

✅ API key is only in server-side code
✅ Key is not exposed in browser JavaScript bundles
✅ Unauthorized users cannot use your Web3Forms account
✅ Key is not committed to Git (`.env.local` is in `.gitignore`)

## Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add `WEB3FORMS_ACCESS_KEY` to your hosting platform's environment variables
2. The key will be injected at build time on the server
3. Never commit `.env.local` to your repository
