import axios from "axios";
import { REACT_APP_API_ROOT_URL } from "../utils";
import { getConfig } from "./config";

export async function getByPartNumber(sku: string) {
    const url = `${REACT_APP_API_ROOT_URL}/br/part/${sku}`;

    try {
    const result = await axios.get(url, getConfig);
    return { data: result.data, status: result.status};
    } catch(error) {
        return { status: 400 }
    }
}

export async function getByUPC(upc: string) {
    const url = `${REACT_APP_API_ROOT_URL}/br/part/${upc}`;

    try {
    const result = await axios.get(url, getConfig);
    return { data: result.data, status: result.status};
    } catch(error) {
        return { status: 400 }
    }
}

export const api = {
    getByPartNumber,
    getByUPC,
}