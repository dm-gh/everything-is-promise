export function pmap<A, B>(fn: (a: A) => B): (promise: Promise<A>) => Promise<B> {
    return promise => promise.then(fn);
}