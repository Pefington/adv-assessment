import { describe, it, expect } from 'vitest';
import { applyRoundingStep } from '../applyRoundingStep.ts';

describe('applyRoundingStep', () => {
  it('should NOT round to 5 cents if the ceiling is a multiple of 5 cents', () => {
    expect(applyRoundingStep(379.8)).toStrictEqual(380);
  });

  it('should round a price UP to the nearest 5 cents otherwise', () => {
    expect(applyRoundingStep(101)).toStrictEqual(105);
  });
});
