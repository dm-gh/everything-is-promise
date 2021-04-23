export function div(a: Promise<number>, b: Promise<number>): Promise<number>;

export function div(a: Promise<any>, b: Promise<any>): Promise<unknown> {
    return Promise.all([a, b]).then(([a, b]) => a / b);
}

export const divC = (a: Promise<any>) => (b: Promise<any>) => Promise.all([a, b]).then(([a, b]) => a / b);
