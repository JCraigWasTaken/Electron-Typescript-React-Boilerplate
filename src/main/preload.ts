import { contextBridge, ipcRenderer } from "electron"

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("api", {
    // Example IPC function - you can add more as needed
    send: (channel: string, data: any) => {
        // whitelist channels
        const validChannels = ["message-to-main"]
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data)
        }
    },
    receive: (channel: string, func: Function) => {
        const validChannels = ["message-from-main"]
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (_, ...args) => func(...args))
        }
    },
})
