/**
 * Request Advent of Code puzzle input for use in browser console
 * Note: Must be used when on page on https://adventofcode.com due to same
 * origin policy
 *
 * Usage:
 * getInput().then((input) => { });
 *
 * @param  {string} url Input URL to request
 * @return {Promise}  Promise returning input as string
 */
function getInput(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Input download failed", response);
      }
    });
}

/**
 * Request Advent of Code puzzle input for the passed day.
 * For use in browser console
 * Note: Must be used when on page on https://adventofcode.com due to same
 * origin policy
 *
 * Usage:
 * getDailyInput().then((input) => { });
 *
 * @param  {number|string} day The day's input you're requesting
 * @return {Promise}  Promise returning input as string
 */
function getDailyInput(day) {
  return getInput(`https://adventofcode.com/2018/day/${day}/input`);
}
