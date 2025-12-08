# Concepts

---

## 1. Counting Sort (Pattern-Level Summary)

### **What It Is**
A non-comparison sorting algorithm that counts how many times each value appears and then reconstructs the sorted array using those counts.

### **When to Use It**
- When the values fall within a **small, known range** (e.g., only `0` and `1`, or values up to a few hundred).
- When sorting binary arrays, counting sort simplifies to:
  1. Count zeros  
  2. Fill the array with zeros, then ones

### **Core Loop**

```js
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
}
```
### **Big Idea**
Instead of comparing values (like in quicksort or mergesort), you sort by **frequency**.

---

## 2. Set Membership Loop Pattern  
### *(LeetCode 2154 and many others)*

### **What It Is**
A pattern where you place all input values into a **Set** for O(1) membership checks, then repeatedly apply a transformation to a value as long as it exists in the set.

### **When to Use It**
Use this pattern when a problem says things like:

- “While x exists in the list…”
- “Keep doubling/halving/transforming x…”
- “Repeat until the value disappears…”

Or when repeated membership checking would otherwise require:

- `nums.includes(x)` → **O(n)**  
- nested loops  
- manually scanning the list each iteration

### **Core Loop**

```js
const seen = new Set(nums);

while (seen.has(value)) {
    value = transform(value);
}
```

### **Big Idea**
Use a Set to reduce repeated membership checks from O(n) to O(1) and pair it with a while loop to handle repeated transformations.