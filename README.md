# Algorithms

## Notes:

- Fibonacci
- - in fibsRec, to create an array using recursion, we use the spread operator(...) to get the previous items ( fibsRec(n-1 ))
- - lastly, we get the last element from using the fibonacci formula: fn = fn-1 + fn-2;

- Merge sort
- - in merge sort, we divide and conquer
- - we split the array in half, from left and right
- - left most array calls merge sort on itself and continues until there is only one element
- - same thing goes for the right array
- - both are done being split, time to merge through comparison
- - eventually the merged array is returned to its previous recursion and does so until we get back the top


