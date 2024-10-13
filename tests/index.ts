import { test } from 'vitest';

// Functions
import translate from '../src';

test('translate 1', ({ expect }) => {
  const text = translate('東京都');
  expect(text).toBe('Tokyo');
});

test('translate 2', ({ expect }) => {
  const text = translate('Tokyo');
  expect(text).toBe('東京都');
});

test('translate 3', ({ expect }) => {
  const text = translate('神奈川県');
  expect(text).toBe('Kanagawa');
});

test('translate 4', ({ expect }) => {
  const text = translate('Kanagawa');
  expect(text).toBe('神奈川県');
});
