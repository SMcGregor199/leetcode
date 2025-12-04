/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    
    let result = [];
    // ⏱️ Time: O(1)
    // 🧠 Space: O(1)
    // Creates an empty array reference — no significant cost here.

    for (let col of words) {
        // ⏱️ Time: Loop runs W times (W = number of words).
        // 🧠 Space: O(1) — loop variable only.

        const colArray = col.split(separator);
        // ⏱️ Time cost created here:
        //     - split scans the entire string → O(Lᵢ)
        // 🧠 Space cost created here:
        //     - allocates a new array of substrings → O(Lᵢ)
        // Cost center #1.

        const cleanedColArray = colArray.filter((w) => w !== "");
        // ⏱️ Time cost created here:
        //     - filter iterates through all substrings → O(Lᵢ)
        // 🧠 Space cost created here:
        //     - creates new filtered array → O(Lᵢ) worst case
        // Cost center #2.

        result.push(...cleanedColArray);
        // ⏱️ Time cost created here:
        //     - spreads cleanedColArray and pushes each element → O(Kᵢ)
        //       where Kᵢ ≤ Lᵢ
        // 🧠 Space cost created here:
        //     - adds Kᵢ items to result → O(Kᵢ)
        // Cost center #3.
    }

    return result;
    // ⏱️ Time: O(1)
    // 🧠 Space: O(1)
};


/*
===========================
⭐ FINAL TAKEAWAY SUMMARY ⭐
===========================


Overall:
✔ Time:  O(N)
✔ Space: O(N)

This is a perfectly acceptable brute-force / straightforward solution for LeetCode 2788.
*/
