/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 1) {
    return str;
  }
  const res = [];
  let counter = 1;
  let prev = str[0];

  for (let idx = 1; idx < str.length + 1; idx++) {
    const cur = str[idx];

    if (cur === prev) {
      counter += 1;
    } else {
      res.push(counter === 1 ? prev : `${counter}${prev}`);
      prev = cur;
      counter = 1;
    }
  }

  return res.join('');
}

module.exports = encodeLine;
