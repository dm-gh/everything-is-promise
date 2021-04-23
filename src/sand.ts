import {p, add, pmap} from  './index.ts';

console.log(
    await ([...Array(50)].map((_, i) => fetch(`http://localhost:3000/${i}`)).map(pmap((v: any) => v.json())).reduce(add))
);