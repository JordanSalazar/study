/**
 * Performs a binary search on an array recursively without using any JS array functions
 *
 * @param {number} needle
 * @param {number[]} haystack
 * @param {number} start? = 0
 * @param {number} end? = haystack.length
 *
 * @returns {number}
 */
export type RecursiveBinarySearch = (
  needle: number,
  haystack: number[],
  start?: number,
  end?: number,
) => number

export default function RecursiveBinarySearch(
  needle,
  haystack,
  start = 0,
  end = haystack.length,
): number {
  const index = Math.floor((end + start) / 2)
  const test = haystack[index]

  if (test === needle) {
    return index
  }

  if (needle < test) {
    return RecursiveBinarySearch(needle, haystack, start, index)
  }

  if (needle > start) {
    return RecursiveBinarySearch(needle, haystack, index, end)
  }
}
