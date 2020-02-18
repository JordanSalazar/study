import mergeSort from './merge'

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = (input: number[]) => {
  const result = [...input]
  for (let i = 1; i < result.length; i++) {
    const j = Math.floor(Math.random() * i)
    const swap1 = result[i]
    result[i] = result[j]
    result[j] = swap1
  }

  return result
}

// Generates a sorted range of numbers of given length
const range = (length: number = 50, step: number = 1): number[] => {
  const arr = [...Array(length).keys()]
  return arr.map((k, i) => (i + 1) * step)
}

// Confirms an array is sorted
const isSorted = (input: number[]): boolean =>
  input.every(
    (element: number, index: number, array: number[]) =>
      index > 0 ? array[index - 1] <= element : true,
  )

test('Array is sorted', (): void => {
  expect(isSorted([1, 2, 3])).toEqual(true)
  expect(isSorted([2, 1, 3])).toEqual(false)
})

test('Mergesort', (): void => {
  const subject = shuffle(range(Math.floor(Math.random() * 100), 5))
  const result = mergeSort(subject)

  expect(isSorted(result)).toEqual(true)
  expect(result.length).toEqual(subject.length)
})
