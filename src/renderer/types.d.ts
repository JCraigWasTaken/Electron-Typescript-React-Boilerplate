interface Window {
    api: {
        send: (channel: string, data: unknown) => void
        receive: (channel: string, func: Function) => void
    }
}
