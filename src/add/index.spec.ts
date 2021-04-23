import assert from 'assert';
import {p} from '../p';
import {add, addC} from './index';

describe('add', () => {
    it('number + number = number', async () => {
        assert.strictEqual(await add(p(1), p(2)), 1 + 2);
    });
    it('number + string = string', async () => {
        assert.strictEqual(await add(p(1), p("string")), 1 + "string");
    });

    it('string + number = string', async () => {
        assert.strictEqual(await add(p("str"), p(2)), "str" + 2);
    });
    it('string + string = string', async () => {
        assert.strictEqual(await add(p("str"), p("str")), "str" + "str");
    });
    it('string + boolean = string', async () => {
        assert.strictEqual(await add(p("str"), p(true)), "str" + true);
    });
    it('string + object = string', async () => {
        assert.strictEqual(await add(p("str"), p({})), "str" + {});
    });

    it('boolean + string = string', async () => {
        assert.strictEqual(await add(p(true), p("str")), true + "str");
    });

    it('object + string = number', async () => {
        assert.strictEqual(await add(p({}), p("str")), {} + "str");
    });

});

describe('addC', () => {
    it('number + number = number', async () => {
        assert.strictEqual(await addC(p(1))(p(2)), 1 + 2);
    });
    it('number + string = string', async () => {
        assert.strictEqual(await addC(p(1))(p("string")), 1 + "string");
    });

    it('string + number = string', async () => {
        assert.strictEqual(await addC(p("str"))(p(2)), "str" + 2);
    });
    it('string + string = string', async () => {
        assert.strictEqual(await addC(p("str"))(p("str")), "str" + "str");
    });
    it('string + boolean = string', async () => {
        assert.strictEqual(await addC(p("str"))(p(true)), "str" + true);
    });
    it('string + object = string', async () => {
        assert.strictEqual(await addC(p("str"))(p({})), "str" + {});
    });

    it('boolean + string = string', async () => {
        assert.strictEqual(await addC(p(true))(p("str")), true + "str");
    });

    it('object + string = number', async () => {
        assert.strictEqual(await addC(p({}))(p("str")), {} + "str");
    });

});