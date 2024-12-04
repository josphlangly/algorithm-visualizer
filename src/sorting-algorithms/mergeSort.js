export const mergeSort = async (array, setArray, setComparingIndices, setSortedIndices, getSpeed, paused) => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Merge two sorted arrays
  const merge = async (left, right) => {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      setComparingIndices([i, j]);  // Highlight the elements being compared
      await delay(getSpeed());  // Dynamic speed control

      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
      setComparingIndices([]); // Reset comparison highlight
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  // Recursive function to split the array and merge
  const mergeSortHelper = async (arr) => {
    if (arr.length <= 1) return arr;  // Base case for recursion (sorted array)

    const mid = Math.floor(arr.length / 2);
    const left = await mergeSortHelper(arr.slice(0, mid));  // Split left
    const right = await mergeSortHelper(arr.slice(mid));  // Split right

    const merged = await merge(left, right);  // Merge the sorted halves
    setArray([...merged]);  // Update the array with the merged result
    await delay(getSpeed());  // Dynamic speed control after merging
    return merged;
  };

  await mergeSortHelper(array);
};
