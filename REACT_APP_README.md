# React App - GitHub Actions CI/CD

This repository demonstrates automated building and deployment of a React application using GitHub Actions.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── 04-workflow-custom-actions.yaml    # Main CI/CD workflow
├── public/
│   └── index.html                              # HTML template
├── src/
│   ├── App.js                                  # Main React component
│   ├── App.css                                 # App styling
│   ├── index.js                                # React entry point
│   ├── index.css                               # Global styles
│   └── App.test.js                             # Component tests
└── package.json                                # Dependencies & scripts
```

## Workflow Overview

The GitHub Actions workflow (`04-workflow-custom-actions.yaml`) includes two main jobs:

### 1. **Build Job** (Runs on every push/PR)
   - Checks out the code
   - Sets up Node.js 18 with npm caching
   - Installs dependencies
   - Runs tests
   - Builds the optimized production bundle
   - Uploads the build artifact

### 2. **Deploy Job** (Runs only on main branch pushes)
   - Downloads the build artifact
   - Deploys to GitHub Pages
   - Prints the deployment URL

## Getting Started Locally

### Prerequisites
- Node.js 18+ and npm installed
- Git configured

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
The app will open at `http://localhost:3000`

### Testing
```bash
npm test
```

### Build Production Bundle
```bash
npm run build
```
Creates an optimized build in the `build/` directory.

## GitHub Pages Deployment

For automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

2. **Workflow Features**
   - Automatically triggers on push to `main` branch
   - Requires successful build and tests first
   - Uses `peaceiris/actions-gh-pages` for deployment
   - Stores build artifacts for 5 days

## Triggering Workflows

- **Build only**: Push to `develop` or open a PR
- **Build & Deploy**: Push to `main` branch
- You can also manually trigger workflows from the Actions tab

## Environment Secrets (Optional)

If you need custom deployment or notification steps, add secrets in:
- Settings → Secrets and variables → Actions

## Key Technologies

- **React 18**: Modern UI framework
- **GitHub Actions**: CI/CD automation
- **Node.js**: JavaScript runtime
- **npm**: Package manager
- **GitHub Pages**: Free static hosting

## Customization

To modify the workflow:
1. Edit `.github/workflows/04-workflow-custom-actions.yaml`
2. Change Node version in `Setup Node.js` step
3. Add/modify test or build commands
4. Add deployment to other platforms

## Troubleshooting

**Build fails with "module not found":**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` locally first
- Commit updated `package-lock.json`

**Deployment doesn't show:**
- Check GitHub Pages settings (Settings → Pages)
- Verify `gh-pages` branch exists
- Check workflow logs in Actions tab

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Documentation](https://react.dev)
- [GitHub Pages Deployment Action](https://github.com/peaceiris/actions-gh-pages)

---

**Happy coding!** 🚀
