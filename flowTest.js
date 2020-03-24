// @flow
// @format

const add = (a: number, b: number): number => {
  return a + b
}

add(1, 2) // 3
add('a', 2) // => FlowError
