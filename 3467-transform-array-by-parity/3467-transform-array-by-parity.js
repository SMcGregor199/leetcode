/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {

    for(let i = 0; i < nums.length;i++){ 
        if(nums[i]  % 2 === 0){
            nums[i] = 0;
        }   
    }

    for(let i = 0; i < nums.length;i++){
        if(nums[i]  !== 0){
            nums[i] = 1;
        }   
    }

    let zeroCount = 0;

    for(let n of nums){
        if(n===0){
            zeroCount++;
        }
    }

    for(let i = 0; i< nums.length; i++){
        if(i < zeroCount){
            nums[i] = 0;
        } else {
            nums[i] = 1;
        }
    }

    return nums;

};