import { getRandomColor, rgbToHex, rgbToRgba } from '../dist/index.mjs'
import { run, test } from 'vitest';

run(

  test('getRandomColor', (assert) => {
    const color = getRandomColor();
    assert(typeof color === 'string');
    assert(color.match(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/));
  }),

  test('rgbToHex', (assert) => {
    assert(rgbToHex('rgb(123, 45, 67)') === '#7b2d43');
    assert(rgbToHex('rgb(255, 255, 255)') === '#ffffff');
    assert(rgbToHex('rgb(0, 0, 0)') === '#000000');
  }),

  test('rgbToRgba', (assert) => {
    assert(rgbToRgba('rgb(123, 45, 67)', 0.5) === 'rgba(123, 45, 67, 0.5)');
    assert(rgbToRgba('rgb(255, 255, 255)', '0.75') === 'rgba(255, 255, 255, 0.75)');
    assert(rgbToRgba('rgb(0, 0, 0)', 1) === 'rgba(0, 0, 0, 1)');
  })

);
