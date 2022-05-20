/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/


/*
1. understand the problem 
 - 


2. Devise a plan 
   - loop over array of nums
   - use map to store key of every number we have seen - assign index as value (reverse lookup)
   - substract the value from nums difference. If value is in Map we return the stored index and loop index
   - if it doesn't exist in the map, store it in the map. The key is going to be number itself will be the value. 
    
3. Carry out the plan 

4. Look back 

O(n)

hashmapcode*/

var twoSum = function(nums, target){
    const map = new Map();
    
    for (let i=0; i< nums.length; i++){
       const num = nums[i]
       const.diff = target - num;
       
       if(map.get(diff)){
            return [i, map.get(diff)]
       }else{
         map.set(num, )
       }
    }
    return [];
}

