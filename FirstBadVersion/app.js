/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//define left boundary and right boundary
//while loop left is less than right boundary
//start = 1 end=n
//terminating condition: start >= end
//while start < end

//if answer is false then move the left and right values, the left value becomes the midpoint + 1, the right value stays at the end, check the new midpoint, if the answer is true,move the left and right values, the right value becomes midpoint -1, the left stays put.

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let start = 1;
    let end = n;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid) == true) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
