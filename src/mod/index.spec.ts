import assert from 'assert';
import {p} from '../p';
import {mod, modC} from './index';

describe('mod', () => {
    it('number % number = number', async () => {
        assert.strictEqual(await mod(p(5), p(2)), 5 % 2);
    });
});

describe('modC', () => {
    it('number % number = number', async () => {
        assert.strictEqual(await modC(p(5))(p(2)), 5 % 2);
    });
});