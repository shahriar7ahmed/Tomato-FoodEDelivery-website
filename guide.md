# Vercel Deployment Guide

This guide will walk you through deploying your Tomato Food Delivery website to Vercel.

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ A Vercel account ([Sign up here](https://vercel.com/signup) if you don't have one)
- ✅ Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- ✅ Node.js installed locally (for testing builds)

## 🚀 Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

This is the easiest way to deploy your website.

#### Step 1: Prepare Your Repository
1. Make sure all your code is committed and pushed to your Git repository:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click the **"Add New Project"** button
3. You'll see a list of your Git repositories
4. Find and select your **Tomato-FoodEDelivery-website** repository
5. Click **"Import"**

#### Step 3: Configure Project Settings
Vercel will automatically detect your project settings:
- **Framework Preset**: Vite (auto-detected)
- **Root Directory**: `./` (project root)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**You don't need to change anything** - just verify these settings are correct.

#### Step 4: Deploy
1. Click the **"Deploy"** button
2. Wait for the build to complete (usually 1-2 minutes)
3. Once deployed, you'll get a live URL like: `https://your-project-name.vercel.app`

#### Step 5: Access Your Website
- Your website is now live! 🎉
- You can find the URL in your Vercel dashboard
- Every time you push to your main branch, Vercel will automatically redeploy

---

### Method 2: Deploy via Vercel CLI (For Advanced Users)

If you prefer using the command line, follow these steps:

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

#### Step 3: Navigate to Your Project
```bash
cd E:\Tomato-FoodEDelivery-website
```

#### Step 4: Deploy
For a preview deployment (testing):
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

#### Step 5: Follow the Prompts
- The CLI will ask you to link to an existing project or create a new one
- It will detect your project settings automatically
- Confirm the settings and wait for deployment

---

## 🔧 Project Configuration

Your project is already configured with the following:

### `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration ensures that:
- All routes redirect to `index.html` for proper React Router SPA behavior
- Client-side routing works correctly

### Build Settings (Auto-detected by Vercel)
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: Latest LTS (auto-selected)

---

## 🔄 Automatic Deployments

Once connected to Vercel, your project will automatically:

1. **Deploy on every push** to your main/master branch
2. **Create preview deployments** for pull requests
3. **Generate unique URLs** for each deployment

### Deployment Workflow
```
Push to main branch → Vercel detects changes → Builds project → Deploys → Live!
```

---

## 🌐 Custom Domain Setup

To use your own domain name:

### Step 1: Add Domain in Vercel
1. Go to your project dashboard on Vercel
2. Click on **"Settings"** tab
3. Navigate to **"Domains"** section
4. Click **"Add Domain"**
5. Enter your domain name (e.g., `yourdomain.com`)

### Step 2: Configure DNS
Vercel will provide you with DNS records to add:
- **A Record** or **CNAME Record**
- Follow the specific instructions shown in the Vercel dashboard

### Step 3: Wait for Propagation
- DNS changes can take 24-48 hours to propagate
- Vercel will show the status of your domain configuration

### Step 4: SSL Certificate
- Vercel automatically provides SSL certificates (HTTPS)
- No additional configuration needed!

---

## 🔍 Troubleshooting

### Build Fails

**Problem**: Build fails during deployment

**Solutions**:
1. Test build locally first:
   ```bash
   npm install
   npm run build
   ```
2. Check for errors in the build output
3. Ensure all dependencies are in `package.json`
4. Check Node.js version compatibility

### Routes Not Working

**Problem**: Direct URL access to routes returns 404

**Solution**: This is already handled by `vercel.json` rewrites. If it's not working:
1. Verify `vercel.json` is in the root directory
2. Check that the rewrites configuration is correct
3. Redeploy the project

### Environment Variables

**Problem**: Need to add environment variables

**Solution**:
1. Go to Project Settings → Environment Variables
2. Add your variables for:
   - Production
   - Preview
   - Development
3. Redeploy after adding variables

### Build Timeout

**Problem**: Build takes too long and times out

**Solutions**:
1. Optimize your build (reduce bundle size)
2. Check for unnecessary dependencies
3. Consider upgrading to Vercel Pro for longer build times

---

## 📊 Monitoring Your Deployment

### Viewing Deployment Logs
1. Go to your project dashboard
2. Click on any deployment
3. View build logs, deployment logs, and function logs

### Performance Insights
- Vercel provides analytics on your deployments
- Check Core Web Vitals
- Monitor build times and success rates

---

## 🔄 Updating Your Website

### Automatic Updates
- Push changes to your main branch
- Vercel automatically builds and deploys
- Your site updates in 1-2 minutes

### Manual Redeploy
1. Go to your project dashboard
2. Click on the deployment you want to redeploy
3. Click the "..." menu
4. Select "Redeploy"

---

## ✅ Post-Deployment Checklist

After your first deployment:

- [ ] Visit your live URL and test the website
- [ ] Test all routes and navigation
- [ ] Check mobile responsiveness
- [ ] Verify images and assets load correctly
- [ ] Test form submissions (if applicable)
- [ ] Check browser console for errors
- [ ] Set up a custom domain (optional)
- [ ] Configure environment variables (if needed)

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vercel Support](https://vercel.com/support)

---

## 🎉 You're All Set!

Your website is now deployed and ready to share with the world!

**Quick Links:**
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)

---

## 💡 Tips

1. **Preview Deployments**: Every pull request gets a preview URL - great for testing!
2. **Rollback**: If something goes wrong, you can instantly rollback to a previous deployment
3. **Analytics**: Enable Vercel Analytics to track your website performance
4. **Edge Functions**: Consider using Vercel Edge Functions for better performance

---

**Need Help?** Check the [Vercel Community](https://github.com/vercel/vercel/discussions) or [Support](https://vercel.com/support)

