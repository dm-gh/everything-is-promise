import assert from 'assert';
import {p} from '../p';
import {div, divC} from './index';

describe('div', () => {
    it('number / number = number', async () => {
        assert.strictEqual(await div(p(4), p(2)), 4 / 2);
    });
});

describe('divC', () => {
    it('number / number = number', async () => {
        assert.strictEqual(await divC(p(4))(p(2)), 4 / 2);
    });
});