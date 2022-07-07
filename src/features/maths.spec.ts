import { describe, it, expect } from 'vitest';

import { add } from './maths';

describe('the maths module', () => {
    describe('addition', () => {
        it('should correctly add numbers', () => {
            expect(add(1, 2)).toBe(3);
        })
    })
})