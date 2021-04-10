/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');

  function countChars(string) {
    const counter = {};
    Array.from(string).forEach((element) => {
      if (counter[element]) {
        counter[element]++;
      } else counter[element] = 1;
    });
    return counter;
  }

  const counter1 = countChars(s1);
  const counter2 = countChars(s2);

  let res = 0;

  Object.keys(counter1).forEach((element) => {
    if (counter2[element]) {
      res += counter1[element] <= counter2[element] ? counter1[element] : counter2[element];
    }
  });

  return res;
}

module.exports = getCommonCharacterCount;
