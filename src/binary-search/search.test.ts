import 'jest'
import iterative, { IterativeBinarySearch } from './iterative'
import recursive, { RecursiveBinarySearch } from './recursive'

const binarySearchTest = (
  binarySearch: IterativeBinarySearch | RecursiveBinarySearch,
): (() => void) => {
  return (): void => {
    const input: number[] = [0, 5, 13, 19, 22, 41, 55, 68, 72, 81, 98]

    const predicate1: number = 22
    const answer1: number = 4

    const predicate2: number = 68
    const answer2: number = 7

    const predicate3: number = 41
    const answer3: number = 5

    expect(binarySearch(predicate1, input)).toBe(answer1)
    expect(binarySearch(predicate2, input)).toBe(answer2)
    expect(binarySearch(predicate3, input)).toBe(answer3)
  }
}

test('Binary search -- iterative', binarySearchTest(iterative))
test('Binary search -- recursive', binarySearchTest(recursive))
