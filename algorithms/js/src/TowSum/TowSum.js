
let twoSum = function(nums, target) {
  let sum = 0 ;
  for(let i = 0 ; i < nums.length ; i++){
      for(let j =i+1 ; j < nums.length ; j++){
          sum = nums[i] + nums[j];
          if (sum == target){
              let out = [i , j]
              return out ;
          }
      }
  }
};