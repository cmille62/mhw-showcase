export interface Settings {
    id: string;
    live: boolean;
}

export interface ImportProduct {
    sku?: string;
    upc?: string;
}
export interface Import {
    data: ImportProduct[];
}