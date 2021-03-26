

export interface API<T> {
    get: () => Promise<{ status: number, data: T}>;
    update: (value: T) => Promise<{status: number}>;
}

export interface APISpecific<T> {
    get: (id: string) => Promise<{ status: number, data: T}>;
    update: (value: T) => Promise<{status: number}>;
}

export interface APIQuery<T, Q> {
    get: (query: Q) => Promise<{ status: number, data: T[]}>;
    update: (value: T) => Promise<{status: number}>;
}