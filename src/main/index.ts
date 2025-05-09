import { app, BrowserWindow, shell } from "electron";
import * as path from "path";

// Enable garbage collection when window is closed
const handleWindowClose = () => {
  mainWindow = null;
};

// Keep a global reference of the window object to avoid garbage collection
let mainWindow: BrowserWindow | null = null;

const createWindow = (): void => {
  const iconPath = app.isPackaged
    ? path.join(process.resourcesPath, "icon.ico")
    : path.join(__dirname, "../../public/icon.ico");
  // Create the browser window with secure defaults
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true, // Protect against prototype pollution
      nodeIntegration: false, // Disable node integration for security
      sandbox: true, // Sandbox the renderer process
      webSecurity: true, // Enable web security
    },
    autoHideMenuBar: true,
  });

  // Set up window close handler for better memory management
  mainWindow.on("closed", handleWindowClose);

  // Disable autofill and implement other security best practices
  mainWindow.webContents.on("did-create-window", (window) => {
    window.webContents.executeJavaScript(`
      if (navigator.credentials) {
        navigator.credentials.preventSilentAccess();
      }
      // Disable eval
      window.eval = null;
      // Implement additional security headers
      window.document.addEventListener('DOMContentLoaded', () => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = "default-src 'self'; script-src 'self';";
        document.head.appendChild(meta);
      });
    `);
  });

  // Load the app depending on environment
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:9000");
    // Open the DevTools in development mode
    setTimeout(() => {
      mainWindow && mainWindow.webContents.openDevTools();
    }, 5000);
  } else {
    // In production, use the bundled renderer code
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));

    // Uncomment the following line to open DevTools in production
    // mainWindow && mainWindow.webContents.openDevTools();
  }

  // Open external links in the default browser instead of a new electron window
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  // Set up hot reload during development
  if (process.env.NODE_ENV === "development") {
    try {
      require("electron-reload")(__dirname, {
        electron: path.join(
          __dirname,
          "../../node_modules",
          ".bin",
          "electron"
        ),
        hardResetMethod: "exit",
      });
    } catch (err) {
      console.log("Error setting up hot reload:", err);
    }
  }
};

// Create window when Electron is ready
app.whenReady().then(() => {
  createWindow();

  // On macOS it's common to re-create a window when clicking on the dock icon
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Enable secure communication and restrict navigation
app.on("web-contents-created", (_, contents) => {
  // Disallow navigation to ensure the app only displays trusted content
  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    // Only allow navigation to localhost during development
    if (
      process.env.NODE_ENV === "development" &&
      parsedUrl.hostname === "localhost"
    ) {
      return;
    }
    event.preventDefault();
  });

  // Restrict the creation of new windows
  contents.setWindowOpenHandler(() => {
    return { action: "deny" };
  });
});
