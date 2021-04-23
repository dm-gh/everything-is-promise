import assert from 'assert';
import { p } from './index';

describe('p', () => {
    it('p(number)', async () => {
        assert.strictEqual(await p(1), 1); 
    });

    it('p(string)', async () => {
        assert.strictEqual(await p("Hello world"), "Hello world"); 
    });

    it('p(boolean)', async () => {
        assert.strictEqual(await p(true), true); 
    });

    it('p(object)', async () => {
        const obj = {};
        assert.strictEqual(await p(obj), obj); 
    });
});