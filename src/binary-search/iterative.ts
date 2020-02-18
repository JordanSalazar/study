/**
 * Performs a binary search on an array iteratively without using any JS array functions
 *
 * @param {number} needle
 * @param {number[]} haystack
 *
 * @returns {number}
 */
export type IterativeBinarySearch = (
  needle: number,
  haystack: number[],
) => number

export default function IterativeBinarySearch(
  needle: number,
  haystack: number[],
): number {
  let iteratorStart = 0
  let iteratorEnd: number = haystack.length

  while (true) {
    const index: number = Math.floor((iteratorEnd + iteratorStart) / 2)
    const subject: number = haystack[index]

    if (subject === needle) {
      return index
    }

    if (needle < subject) {
      iteratorEnd = index
    } else if (needle > subject) {
      iteratorStart = index
    }
  }
}
