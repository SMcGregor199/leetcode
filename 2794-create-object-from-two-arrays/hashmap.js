/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */

 /*
    ===========================
    ⭐ FINAL TAKEAWAY SUMMARY ⭐
    ===========================

    Overall:
    ✔ Time:  O(N)
    ✔ Space: O(N)
 */

var createObject = function(keysArr, valuesArr) {
    const obj = {};

    for (let i = 0; i < keysArr.length; i++) {
        const sKey = String(keysArr[i]);

        // Use "in" to ensure we check key existence, not truthiness
        if (!(sKey in obj)) {
            obj[sKey] = valuesArr[i];
        }
    }

    return obj;
};

/*
    O(n) space: I'm creating an output object whose size depends on how many
    unique stringified keys appear in the input. In the worst case, every key
    is unique, so the object grows proportionally with n (the length of keysArr).
    This simplifies to O(n) space.

    O(n) time: I'm looping one time through keysArr, and for each element I
    convert the key to a string (constant work) and check whether the key already
    exists in the object using the "in" operator (also constant time). Since each
    iteration does O(1) work, and I perform this for n elements, the total time
    simplifies to O(n).
*/
