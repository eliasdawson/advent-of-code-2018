/**
 * /**
 * Request Advent of Code puzzle input for use in browser console
 * Note: Must be used when on page on https://adventofcode.com due to same
 * origin policy
 *
 * Usage:
 * let input;
 * getInput('https://adventofcode.com/2018/day/1/input');
 * // wait for request to complete
 * // input will contain string of input file contents
 *
 * @param  {string} url Input URL to request
 */
function getInput(url) {
  let request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
      input = resp;
    }
  };

  request.send();
}

/**
 * Request Advent of Code puzzle input for the passed day.
 * For use in browser console
 * Note: Must be used when on page on https://adventofcode.com due to same
 * origin policy
 *
 * Usage:
 * let input;
 * getInput(1);
 * // wait for request to complete
 * // input will contain string of input file contents
 *
 * @param  {number|string} day The day's input you're requesting
 * @return {[type]}     [description]
 */
function getDailyInput(day) {
  getInput(`https://adventofcode.com/2018/day/${day}/input`);
}
