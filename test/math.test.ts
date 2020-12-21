import { add, minus } from '../src/math'

test('add: 1 + 1 = 2', () => {
  expect(add(1, 1)).toBe(2)
})

test('minus: 2 - 1 = 1', () => {
  expect(minus(2, 1)).toBe(1)
})

let x: number = ''
