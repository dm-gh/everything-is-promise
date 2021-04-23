import assert from 'assert';
import {p} from '../p';
import {sub, subC} from './index';

describe('sub', () => {
    it('number - number = number', async () => {
        assert.strictEqual(await sub(p(1), p(2)), 1 - 2);
    });
});

describe('subC', () => {
    it('number - number = number', async () => {
        assert.strictEqual(await subC(p(1))(p(2)), 1 - 2);
    });
});