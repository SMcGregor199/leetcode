# Notes
This question asked me to find the maximum number of times I could multiply a number by 2 before it exceeded a given threshold. I used a Set where I entered as values, all the vlaues in the array, an O of n time operation, then I use a while loop to check if the original value was in the set, if it was, I multiplied it by 2 and checked again. I repeated this until the value exceeded the threshold. I then returned the original value, modified, after the loop. The while loop is what makes this an O of N operation. 

# Time Complexity
O(n)

# Space Complexity
O(n)
