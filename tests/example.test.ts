import { double } from '../src/example';

describe('example', () => {
  it('doubles number', () => {
    expect(double(5)).toBe(10);
  });
});
