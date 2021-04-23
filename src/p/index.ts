export function p<T>(value: T): Promise<T> {
    return Promise.resolve(value);
}
