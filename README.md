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

# Install dependencies and set up git hooks
npm install
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

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
