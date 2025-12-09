# Netlify Deployment Guide

## Prerequisites
- Node.js and npm installed
- A Netlify account

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard

1. **Build the project locally** (optional, for testing):
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://www.netlify.com/)
   - Sign in or create an account
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Navigate to project directory**:
   ```bash
   cd Tomato-FoodEDelivery-website
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

## Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects for React Router

## Important Notes

- The app uses React Router for client-side routing
- All routes are configured to redirect to `index.html` for proper SPA behavior
- The project root is the base directory for deployment

## Environment Variables

If you need to add environment variables:
1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow the DNS configuration instructions

