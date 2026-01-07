/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length-1;
    //hello
    //oello
    while(left <= right){
        let leftValue = s[left];
        let rightValue = s[right];

        s[left] = rightValue;
        s[right] = leftValue;

        left++;
        right--;
    }

    return s; 
};