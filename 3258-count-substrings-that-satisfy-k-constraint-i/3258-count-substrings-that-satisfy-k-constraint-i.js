/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let left = 0;
    let zeros = 0;
    let ones = 0; 
    let ans = 0

    for(let right = 0; right< s.length; right++){
        
        if(s[right]==="0"){
            zeros++;
        } else {
            ones++;
        }

        while(zeros > k && ones > k){
            if(s[left]==="0"){
                zeros--;
            } else {
                ones--;
            }
            left++;
        }

        ans += right - left + 1; 

    }
    return ans; 
};