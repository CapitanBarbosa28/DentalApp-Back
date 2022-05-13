export type statusRequest<T> = {
    result : boolean,
    message? : string,
    data? : T
}