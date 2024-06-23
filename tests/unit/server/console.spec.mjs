import assert from 'assert';

import { log } from '../../../server/console.mjs';

describe('#Console.log', () => {
    it('should add prefix for text', () => {
        const result = log('Test');

        assert.equal(result, 'Log: Test');
    });
});
