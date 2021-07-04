
/**
 * Trims all non-numeric characters out of a positive number
 * @param value 
 * @returns 
 */
export function trimNumber(value: string | number)  {
    return `${value}`.replace(/[^\d.]/g, "");
}

/**
 * Trims all non-numeric characters out of a positive or negitive number
 * @param value  
 * @returns 
 */
 export function trimAnyNumber(value: string | number)  {
    return `${value}`.replace(/[^\d.-]/g, "");
}