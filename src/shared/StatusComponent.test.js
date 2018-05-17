import { clipper } from './StatusComponent';

it('wrong address provided', () => {
  const adrs = '0294949c595';
  expect(clipper(adrs)).toBe('Invalid address');
});

it('clips address properly', () => {
  const adrs = '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f';
  expect(clipper(adrs)).toBe('0x5e...ad9f');
});
