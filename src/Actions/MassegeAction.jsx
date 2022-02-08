import { Success, Primary, Secondary, Error, Info, Warning, Show } from "./types"

export const success = () => {
    return { type: Success };
};
export const primary = () => {
    return { type: Primary }
}
export const secondary = () => {
    return { type: Secondary }
}
export const error = () => {
    return { type: Error }
}
export const info = () => {
    return { type: Info }
}
export const warning = () => {
    return { type: Warning }
}

export const show = () => {
    return { type: Show }
}