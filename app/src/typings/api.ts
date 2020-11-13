

export interface API<T> {
    get: () => Promise<{ status: number, data: T}>;
    update: (value: T) => Promise<{status: number}>;
}