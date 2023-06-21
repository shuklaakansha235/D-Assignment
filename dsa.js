
/* <aside>
💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

</aside> */


function twoSum(nums, target) {
    const numMap = new Map(); // Create a map to store the numbers and their indices
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (numMap.has(complement)) {
        // If the complement is already in the map, we found the solution
        return [numMap.get(complement), i];
      }
      
      // Store the current number and its index in the map
      numMap.set(nums[i], i);
    }
    
    // No solution found
    return [];
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]
  

  /*  <aside>
💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example :**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

**Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)[

</aside> 8  */


  function removeElement(nums, val) {
  let k = 0; // Count of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move the non-val element to the front of the array
      k++;
    }
  }

  return k;
}

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;
const k = removeElement(nums, val);
console.log(k); // Output: 2
console.log(nums); // Output: [2, 2, _, _]


/* <aside>
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

</aside>  */


function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  
  
  const nums = [1, 3, 5, 6];
  const target = 5;
  const index = searchInsert(nums, target);
  console.log(index); 
  


  💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside> */


function plusOne(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
  
    // If all digits are 9, add a new leading digit 1
    digits.unshift(1);
    return digits;
  }
  
  // Example usage:
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]

  


  
  /* <aside>
💡 **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Example 1:**
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

</aside> */


function merge(nums1, m, nums2, n) {
    let i = m - 1; // Index of last element in nums1
    let j = n - 1; // Index of last element in nums2
    let k = m + n - 1; // Index of last position in merged array
  
    while (i >= 0 && j >= 0) {
      // Compare the last elements of nums1 and nums2
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i]; // Place the larger element in the merged array
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  // Example usage:
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  merge(nums1, m, nums2, n);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

  
  /* <aside>
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

</aside> */


function containsDuplicate(nums) {
    const set = new Set();
  
    for (const num of nums) {
      if (set.has(num)) {
        return true; // Duplicate value found
      } else {
        set.add(num);
      }
    }
  
    return false; // No duplicate values found
  }
  
  // Example usage:
  const nums = [1, 2, 3, 1];
  const result = containsDuplicate(nums);
  console.log(result); // Output: true

  

  /* <aside>
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

</aside> */ 

function moveZeroes(nums) {
    let left = 0; // Pointer for non-zero elements
  
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== 0) {
        // Move non-zero element to the left pointer position
        nums[left] = nums[right];
        left++;
      }
    }
  
    // Fill the remaining elements with zeroes
    for (let i = left; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
  
  // Example usage:
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  

  /*  <aside>


/* <aside>
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

</aside> */

function findErrorNums(nums) {
    const n = nums.length;
    let missing, duplicate;
  
    // Calculate the sum of numbers from 1 to n
    const sum = (n * (n + 1)) / 2;
  
    // Calculate the sum of all numbers in the given array
    const arraySum = nums.reduce((acc, curr) => acc + curr, 0);
  
    // Calculate the sum of squares of numbers from 1 to n
    const squareSum = (n * (n + 1) * (2 * n + 1)) / 6;
  
    // Calculate the sum of squares of all numbers in the given array
    const arraySquareSum = nums.reduce((acc, curr) => acc + curr ** 2, 0);
  
    // Find the difference between the expected sum and the array sum
    const diffSum = sum - arraySum;
  
    // Find the difference between the expected sum of squares and the array sum of squares
    const diffSquareSum = squareSum - arraySquareSum;
  
    // Find the duplicated number using the formula (diffSum + diffSquareSum / diffSum) / 2
    duplicate = (diffSum + diffSquareSum / diffSum) / 2;
  
    // Find the missing number by subtracting the duplicate from the expected sum
    missing = duplicate - diffSum;
  
    return [duplicate, missing];
  }
  
  // Example usage:
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  