/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function binarySearch(arr, target, start, end) {
    if (end < 1) return arr[0];
    const middle = Math.floor((start + (end - start) / 2));
    if (target === arr[middle]) return middle;
    if (end - 1 === start) return target === arr[start] ? start : end;
    if (target > arr[middle]) return binarySearch(arr, target, middle, end);
    if (target < arr[middle]) return binarySearch(arr, target, start, middle);
    return undefined;
  }

  const start = 0;
  const end = array.length;

  return binarySearch(array, value, start, end);
}

module.exports = findIndex;
