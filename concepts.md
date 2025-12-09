# Concepts

## 1. Counting Sort (Pattern-Level Summary)

### **What It Is**
A non-comparison sorting algorithm that counts how many times each value appears and then reconstructs the sorted array using those counts.

### **When to Use It**
- When the values fall within a **small, known range** (e.g., only `0` and `1`, or values up to a few hundred).
- When sorting binary arrays by counting zeros and filling the array with zeros then ones.

### **Core Pattern / Example**
```js
let zeroCount = 0;

for (let n of nums) {
    if (n === 0) zeroCount++;
}

for (let i = 0; i < nums.length; i++) {
    nums[i] = i < zeroCount ? 0 : 1;
}

return nums;
```

**Big Idea:**  
Instead of comparing values (like in quicksort or mergesort), you sort by frequency.

---

## 2. Set Membership Loop Pattern
**(Category: Hashing / O(1) Lookup Patterns)**

### **What It Is**
A pattern where you place all input values into a Set for constant-time membership checks, then repeatedly apply a transformation to a value as long as it exists in the set.

### **When to Use It**
When problems say things like:
- “While x exists in the list…”
- “Keep doubling/halving/transforming x…”
- “Repeat until the value disappears…”

When repeated membership checking would otherwise require:
- `nums.includes(x) → O(n)`
- nested loops
- manual scans

### **Core Pattern / Example**
```js
const seen = new Set(nums);

while (seen.has(value)) {
    value = transform(value);
}
```

**Big Idea:**  
Use a Set to convert repeated existence checks from O(n) to O(1) and pair it with a loop that evolves a value until it no longer appears.

---

## 3. Valid Window Substring Counting
**(Category: Sliding Window Pattern)**

### **What It Is**
A sliding-window technique that counts how many substrings satisfy a constraint without generating them. The window expands to the right, shrinks from the left until valid, and once valid, every substring ending at right and starting between left and right is guaranteed valid.

### **When to Use It**
- When counting substrings or subarrays that must satisfy a frequency or sum constraint.
- When shrinking a window cannot make it more invalid (removing characters only makes counts smaller).
- When a problem includes phrasing such as:
  - “Count the number of substrings where…”
  - “At most k occurrences of…”
  - “All windows that satisfy…”

### **Core Pattern / Example**
```js
let left = 0;
let ans = 0;

for (let right = 0; right < s.length; right++) {
    include(s[right]); // update counts or sums

    while (windowIsInvalid()) {
        remove(s[left]); // undo contribution
        left++;
    }

    // Number of valid substrings ending at `right`
    ans += right - left + 1;
}
```

**Big Idea:**  
If the window [left, right] is valid, every smaller substring ending at right is also valid because shrinking removes characters and cannot increase counts. Therefore, the number of valid substrings ending at right equals the number of valid start positions:  
`right - left + 1`.

---