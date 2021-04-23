export function add(a: Promise<number>, b: Promise<number>): Promise<number>;
export function add(a: Promise<number>, b: Promise<string>): Promise<string>;

export function add(a: Promise<string>, b: Promise<any>): Promise<string>;

export function add(a: Promise<boolean>, b: Promise<string>): Promise<string>;

export function add(a: Promise<object>, b: Promise<string>): Promise<number>;

export function add(a: Promise<any>, b: Promise<any>): Promise<unknown> {
    return Promise.all([a, b]).then(([a, b]) => a + b);
}



export const addC = (a: Promise<any>) => (b: Promise<any>) => Promise.all([a, b]).then(([a, b]) => a + b);


