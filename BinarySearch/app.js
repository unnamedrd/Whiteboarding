var search = function (nums, target) {
  //two arguments, an array and a target
  //array of integers and the target which is another integer
  //assume integers only, assume it's not sorted

  //return true if target exists in array
  //return false if target is not included in array

  //use binary search
  //sort the array, low to high
  //start at the middle index of the array
  //if number at the middle index is lower than the target, search to the right
  //go to the middle index, by moving start pointer to the current middle
  //if number at middle index is higher than the target search to the left
  //go to the middle index, by moving end pointer to the current middle

  //process - declare variables for start arr[0] and end arr.length-1
  //middle index = Math.floor(end-start/2 )

  //how to end the loop? end the loop when you've searched all the numbers, end>=start, end>0 OR start<=end
  //this works if you're moving the endpoint to the left, but moving

  let start = 0;
  let end = nums.length - 1;

  let mid = Math.floor(end + start / 2);

  console.log(nums[start], nums[end], nums[mid]);

  while (start <= end) {
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      //move to right
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
    mid = end + start / 2;
  }

  return -1;
};
