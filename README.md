# Electron TypeScript React Boilerplate

A modern, production-ready boilerplate for building cross-platform desktop applications using Electron, TypeScript, React, and Material-UI.

## Features

- 🚀 **Electron** - Build cross-platform desktop applications
- 📝 **TypeScript** - Type safety and modern JavaScript features
- ⚛️ **React** - Powerful and flexible UI library
- 🎨 **Material-UI** - Beautiful and customizable UI components
- 🔨 **Webpack** - Modern build tooling with hot reload
- 🎯 **ESLint & Prettier** - Code quality and formatting
- 🛠️ **Cross-Platform** - Windows, macOS, and Linux support
- 📦 **Auto Updates** - Built-in support for auto-updates
- 🔒 **Security** - Context isolation and secure defaults

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd electron-typescript-react-boilerplate

# Install dependencies
npm install --legacy-peer-deps
```

## Development

```bash
# Start the development server
npm start

# Format code
npm run format

# Lint code
npm run lint

# Fix lint issues
npm run lint:fix
```

The development server will start with hot reload enabled. Any changes you make to the code will automatically refresh the application.

## Building

Build for all platforms:

```bash
npm run build
```

Platform-specific builds:

```bash
# Windows
npm run dist:win

# macOS
npm run dist:mac

# Linux
npm run dist:linux
```

The built applications will be available in the `release` directory.

## Project Structure

```
├── dist/               # Compiled files
├── public/            # Static assets
│   ├── icons/        # Application icons
│   └── index.html    # Main HTML file
├── src/
│   ├── main/        # Electron main process
│   │   ├── index.ts
│   │   └── preload.ts
│   └── renderer/    # React application
│       ├── App.tsx
│       ├── index.tsx
│       └── types.d.ts
├── scripts/         # Build and utility scripts
└── webpack.config.js
```

## Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application
- `npm run dist` - Package the application for distribution
- `npm run format` - Format code using Prettier
- `npm run lint` - Run ESLint
- `npm run generate-icon` - Generate application icons

## Configuration

- **Electron Builder** - Configure build settings in `package.json` under the `build` property
- **Webpack** - Configure bundling in `webpack.config.js`
- **TypeScript** - Configure TypeScript settings in `tsconfig.json`
- **ESLint** - Configure linting rules in `eslint.config.js`
- **Prettier** - Configure code formatting in `.prettierrc`
- **VSCode** - Pre-configured settings in `.vscode/settings.json`

### Editor Setup

VSCode or VSCode-based editors (like VSCodium) are recommended for the best development experience. The project includes pre-configured settings and recommended extensions.

Required VSCode Extensions:

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- TypeScript Support (`ms-vscode.vscode-typescript-next`)

These extensions will be automatically suggested when you open the project in VSCode. Once installed, you'll get:

- Automatic formatting on save using Prettier
- Real-time ESLint error detection and auto-fixing
- Enhanced TypeScript/JavaScript support
- Consistent line endings across platforms

## GitHub Configuration

### Repository Settings

The repository uses [Settings Probot](https://github.com/apps/settings) to automate repository configuration. All settings are version controlled in `.github/settings.yml`, including:
- Repository features (issues, projects, wiki)
- Branch protection rules
- Merge button configuration
- Required status checks
- Pull request review requirements

When changes are made to `.github/settings.yml`, the Settings Probot automatically applies them to the repository. This ensures consistent repository configuration and makes it easy to version control these settings.

### Branch Protection

The `main` branch is protected with the following rules:
- Requires at least one review before merging
- Requires all status checks to pass:
  - Code quality (formatting, linting, tests)
  - Builds on Windows, macOS, and Linux
- Enforces linear history
- Allows force pushes by administrators

### Pull Requests

- Squash merging is enabled (other merge types disabled)
- Branches are automatically deleted after merging
- PR template includes:
  - Description of changes
  - Type of change checklist
  - Testing verification
  - Screenshot section (if applicable)
  - Additional notes section

### Continuous Integration

Every PR and push to main triggers:
1. **Quality Checks**:
   - Code formatting verification
   - Linting
   - Unit tests with coverage requirements (70% threshold)
   - Coverage report generation

2. **Build Verification**:
   - Cross-platform builds (Windows, macOS, Linux)
   - Distribution package creation
   - Artifact preservation

### Artifacts

- Test coverage reports (retained for 14 days)
- Distribution builds (retained for 7 days)

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes following the project's coding standards
4. Ensure all tests pass and coverage requirements are met
5. Submit a pull request using the provided template
6. Address any review comments

## License

This project is licensed under the MIT License.
