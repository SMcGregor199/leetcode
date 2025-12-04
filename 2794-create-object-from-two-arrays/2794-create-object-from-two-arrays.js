/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function(keysArr, valuesArr) {
    /*
        keysArr = ["1", 1, false], valuesArr = [4, 5, 6]
    */

    // create an empty obj
    const obj = {};

    for(i=0;i<keysArr.length;i++){
        sKey = String(keysArr[i]);

        if(!(sKey in obj)){
            obj[sKey] = valuesArr[i];
        } 
    }

    return obj;
    // create loop start at i=0 and go up to < keysArr.length
        //convert key value into string
        //check if string value of key exist in obj
        //if it does exist skip
        //if not, add to object 
    //end loop

    //return obj;
};