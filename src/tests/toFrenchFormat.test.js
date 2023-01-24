import { describe, it, expect } from 'vitest';
import { toFrenchFormat } from '../utils/toFrenchFormat.ts';

describe('toFrenchFormat', () => {
  it('should show an integer to two decimal places, with a comma', () => {
    expect(toFrenchFormat(1900)).toStrictEqual('19,00');
  });
});
