import { describe, it, expect } from 'vitest';
import { formatFR } from '../src/formatFR';

describe('formatFR', () => {
  it('should show an integer to two decimal places, with a comma', () => {
    expect(formatFR(1900)).toStrictEqual('19,00');
  });
});
