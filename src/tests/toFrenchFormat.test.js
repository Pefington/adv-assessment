import { describe, it, expect } from 'vitest';
import { formatToFrench } from '../utils/formatToFrench.ts';

describe('formatToFrench', () => {
  it('should show an integer to two decimal places, with a comma', () => {
    expect(formatToFrench(1900)).toStrictEqual('19,00');
  });
});
