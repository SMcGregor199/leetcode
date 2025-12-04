/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

/*
    ===========================
    ⭐ FINAL TAKEAWAY SUMMARY ⭐
    ===========================


    Overall:
    ✔ Time:  O(N)
    ✔ Space: O(N)
*/

var splitWordsBySeparator = function(words, separator) {
    let result = [];

    for (let col of words) {
        const colArray = col.split(separator);
        const cleanedColArray = colArray.filter(w => w !== "");
        result.push(...cleanedColArray);
    }

    return result;
};

/*
    O(n) space: I'm creating new arrays as part of the split and filter operations.
    Each split produces an array proportional to the length of the current word,
    and each filter produces another array of similar size. All of these substrings
    eventually get pushed into the result array. Across all words, this adds up to O(n)
    additional space, where n is the total number of characters across all input strings.

    O(n) time: I'm looping over all the words, and for each one I'm calling split
    (which scans the entire word), filter (which scans all substrings), and push with
    the spread operator. Since every character from the input is processed a constant
    number of times across these operations, the total time simplifies to O(n).
*/
