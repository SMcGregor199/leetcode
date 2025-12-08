# Notes
This question was particularly interesting. In my solution, I used three loops. The first loop replaced all even numbers with 0. The second loop replaced all odd numbers with 1. The third loop sorted the array in non-decreasing order, but the way I sorted it was to use the "counting sort" technique where because I know the array only contains two possible values, sorting it is just a matter of counting one value filling the start of the array with that value and filling the rest of the array with the other value.

# Time Complexity
O(n)

# Space Complexity
O(1)
