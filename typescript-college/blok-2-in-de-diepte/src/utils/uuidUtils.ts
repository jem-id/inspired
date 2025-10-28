export const generateUUID = (): string => {
    // In sommige omgevingen (Node) is 'self' niet gedefinieerd.
    if (typeof self === 'undefined') {
        return globalThis.crypto.randomUUID();
    }

    return self.crypto.randomUUID();
}