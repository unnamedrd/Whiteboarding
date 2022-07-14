/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  //parameters: nums is an array of integers positive and negative
  //nums could be one integer

  //restate the problem
  //taking k number of integers, calc the average. return the value with the highest maximum
  //Approach, use sliding window
  //[1, 12, -5, -6, 50, 3], k=4
  //initialize variables for maxAvg, windowEnd, windowSum
  //create a loop, iterate through array, moving over one index at a time beyond windowSum
  //windowEnd=arr[0], windowAvg(1+ 12 + -5 + -6)/4
  //windowEnd=arr[1], windowAvg = (12 -5 + -6 + 50)/4
  ///windowEnd=arr[2],windowAvg = (-5 + -6 + 50 + 3)/4
  //windowEnd = arr[3] < k => terminate
  //return (12 -5 + -6 + 50)/4

  let windowAvg = 0;
  let windowSum = 0;
  let maxAvg = 0;
  let windowStart = 0;
  //input of -1

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];
    windowAvg = windowSum / k;

    if (i >= k - 1) {
      //in this case as long as i is more than 3
      maxAvg = Math.max(maxAvg, windowAvg); //this tracks the new maxAvg of every iteration
      windowSum -= nums[windowStart]; //this takes out the first element out the window
      windowStart += 1; //this increments the index so that each time we move forward by 1
    }
  }
  return maxAvg;
};


//passed initial test but failed when nums = [-1]