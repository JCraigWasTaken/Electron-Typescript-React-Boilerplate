interface Window {
    api: {
        send: (channel: string, data: any) => void
        receive: (channel: string, func: Function) => void
    }
}
