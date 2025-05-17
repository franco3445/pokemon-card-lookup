export function toUpperCase(string: string){
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}

export function scrubString(string: string) {
    string = string.split('-')[0];
    return toUpperCase(string);
}
