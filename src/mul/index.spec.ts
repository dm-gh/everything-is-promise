import assert from 'assert';
import {p} from '../p';
import {mul, mulC} from './index';

describe('mul', () => {
    it('number * number = number', async () => {
        assert.strictEqual(await mul(p(1), p(2)), 1 * 2);
    });
});

describe('mulC', () => {
    it('number * number = number', async () => {
        assert.strictEqual(await mulC(p(1))(p(2)), 1 * 2);
    });
});