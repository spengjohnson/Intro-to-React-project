//A Look at Algorithms
/*
####Questions
>Out of the sorting algorithms introduced, or any others you have encountered,
which is the quickest or most efficient in sorting a set of data and why?

A: Quick sort seems to be the quickest and most efficient way to sort the data.
With this method, a pivot is selected and then all of the elements that are larger
or smaller than the pivot are organized into groups. This helps quickly "pre-sort"
the array, and seems to allow a quicker sorting process.
I also think that merge sort seems to be comparable compared to this, because the array
needs to be divided in half (left and right) and each of these are sorted, then merged
back together. Comparatively to something like bubble sort, these methods seem to be faster
and more efficient.

>Why is Binary Search more efficient than Linear Search in most cases?

A: With binary search, the array needs to be sorted via one of the sorting methods.
The sorting is already done, and then it becomes easier to find what you need overall.
For example, if a teacher needs to grade and hand out a stack of assignments all organized by
last name of student, and the teacher needs to find the last name "Nelson", then
they might have that stack pre-sorted. The teacher would then be able to cut that stack in
half since Nelson is in the middle of the alphabet. This will help get closer to the goal
to find student "Nelson's" paper. You're saving time and effort by cutting out letters A-K for example,
eliminating the need to search through a lot of paper.

>Code an implementation of Bubble Sort and test it on an integer array of your choice. */
