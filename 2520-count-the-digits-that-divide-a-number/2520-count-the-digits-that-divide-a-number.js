/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;

    let sNum = String(num);

    for(let i = 0; i < sNum.length; i++){
        let val = Number(sNum[i]);
        
        if(num % val === 0){
            count++;
        }
    }

    return count;
};