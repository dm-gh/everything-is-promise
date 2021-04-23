export function mod(a: Promise<number>, b: Promise<number>): Promise<number>;

export function mod(a: Promise<any>, b: Promise<any>): Promise<unknown> {
    return Promise.all([a, b]).then(([a, b]) => a % b);
}

export const modC = (a: Promise<any>) => (b: Promise<any>) => Promise.all([a, b]).then(([a, b]) => a % b);
