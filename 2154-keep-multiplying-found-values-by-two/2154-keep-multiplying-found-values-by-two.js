/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const seen = new Set(nums);

    
    while (seen.has(original)) {
        original *= 2;
    }

    return original;
};