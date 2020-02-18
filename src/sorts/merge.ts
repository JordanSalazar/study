/**
 * Mergesort algorithm
 *
 * @param {number[]} input
 * @returns {number[]}
 */
export default function mergeSort(input: number[]): number[] {
  return divide(input)
}

/**
 * Divide
 *
 * @param {number[]} arr
 * @param {number} start=0
 * @param {number} end=arr.length
 *
 * @returns {number[]}
 */
function divide(
  arr: number[],
  start: number = 0,
  end: number = arr.length,
): number[] {
  const center = Math.floor((end + start) / 2)

  const rightCount = end - (center + 1)

  const l = end - start > 1 ? divide(arr, start, center) : [arr[start]]
  const r =
    rightCount > -1
      ? end - start > 1
        ? divide(arr, center + 1, end)
        : [arr[end]]
      : []

  return merge(l, r)
}

/**
 * Conquer
 *
 * @param {number[]} left=[]
 * @param {number[]} right=[]
 *
 * @returns {number[]}
 */
function merge(left: number[] = [], right: number[] = []): number[] {
  const result: number[] = []
  let iteratorLeft = 0
  let iteratorRight = 0

  while (result.length < left.length + right.length) {
    let valueLeft = left[iteratorLeft]
    let valueRight = right[iteratorRight]

    if (typeof valueLeft !== 'number') {
      if (right.length > iteratorRight + 1) {
        valueLeft = right[iteratorRight + 1]
      } else {
        result.push(valueRight)
        break
      }
    }

    if (typeof valueRight !== 'number') {
      if (left.length > iteratorLeft + 1) {
        valueRight = left[iteratorLeft + 1]
      } else {
        result.push(valueLeft)
        break
      }
    }

    // Greater than or equal comparison ensures stability
    if (valueLeft <= valueRight) {
      result.push(valueLeft)
      iteratorLeft++
    } else {
      result.push(valueRight)
      iteratorRight++
    }
  }

  return result
}
