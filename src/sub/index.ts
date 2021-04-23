export function sub(a: Promise<number>, b: Promise<number>): Promise<number>;

export function sub(a: Promise<any>, b: Promise<any>): Promise<unknown> {
    return Promise.all([a, b]).then(([a, b]) => a - b);
}

export const subC = (a: Promise<any>) => (b: Promise<any>) => Promise.all([a, b]).then(([a, b]) => a - b);
