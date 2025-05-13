# Electron TypeScript React Boilerplate

Production-ready desktop application boilerplate using Electron, TypeScript, React, and Material-UI.

## Features

- ⚡️ **Core**: Electron, TypeScript, React, Material-UI
- 🔧 **Development**: Hot reload, ESLint, Prettier
- 🛠️ **Build**: Cross-platform support, Auto-updates
- 🔒 **Security**: Context isolation, Secure defaults
- 📦 **CI/CD**: GitHub Actions, Automated testing

## Quick Start

```bash
# Install Node.js LTS first, then:
git clone <your-repo-url>
cd electron-typescript-react-boilerplate
npm install --legacy-peer-deps
npm start
```

## Development Commands

```bash
npm start          # Start dev server with hot reload
npm run format     # Format code
npm run lint       # Check code quality
npm run lint:fix   # Fix lint issues
```

## Build Commands

```bash
npm run build      # Build for all platforms
npm run dist:win   # Build for Windows
npm run dist:mac   # Build for macOS
npm run dist:linux # Build for Linux
```

## Project Structure

```
├── src/
│   ├── main/     # Electron main process
│   └── renderer/ # React application
├── public/       # Static assets
└── scripts/      # Build utilities
```

## Configuration

Edit these files to customize your app:

- `package.json` - App metadata and build settings
- `webpack.config.js` - Bundling configuration
- `tsconfig.json` - TypeScript settings
- `.github/settings.yml` - Repository settings
- `.prettierrc` - Code formatting
- `eslint.config.js` - Linting rules

## Editor Setup (VSCode)

Required extensions (auto-suggested on open):

- ESLint
- Prettier
- TypeScript

Features: Auto-format on save, real-time lint checking, enhanced TypeScript support.

## GitHub Workflow

### Automated Settings

Repository settings are automated via [Settings Probot](https://github.com/apps/settings), configured in `.github/settings.yml`.

### Branch Protection

- Required review before merge
- Required status checks
- Linear history
- Protected `main` branch

### Pull Requests

- Squash merging only
- Auto-delete merged branches
- Structured PR template

### CI/CD Pipeline

- Quality: Formatting, lint, tests (70% coverage)
- Builds: Windows, macOS, Linux
- Artifacts: Coverage reports (14d), builds (7d)

## Contributing

1. Fork and clone
2. Create feature branch
3. Make changes
4. Run tests and checks
5. Submit PR
6. Address reviews

## License

MIT
