// BUBBLE SORTING ALGORITHM
export const bubbleSort = async (array, setArray, setComparingIndices, getSpeed) => {
  let arrayCopy = [...array];
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    for (let j = 0; j < arrayCopy.length - i - 1; j++) {
      setComparingIndices([j, j + 1]);  // Highlight the pair being compared
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Swap elements
        let temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;
        setArray([...arrayCopy]);  // Update state to trigger re-render
      }
      await delay(getSpeed());  // Use dynamic speed
      setComparingIndices([]);  // Reset after delay
    }
  }
};


// SELECTION SORTING ALGORITHM
export const selectionSort = async (array, setArray, setComparingIndices, getSpeed) => {
  let arrayCopy = [...array];
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrayCopy.length; j++) {
      setComparingIndices([minIndex, j]);
      await delay(getSpeed());  // Use dynamic speed

      if (arrayCopy[j] < arrayCopy[minIndex]) {
        minIndex = j;
      }
      setComparingIndices([]);
    }
    if (minIndex !== i) {
      [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
      setArray([...arrayCopy]);
      await delay(getSpeed());  // Use dynamic speed
    }
  }
  setComparingIndices([]);
};


// INSERTION SORTING ALGORITHM
export const insertionSort = async (array, setArray, setComparingIndices, getSpeed) => {
  let arrayCopy = [...array];
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 1; i < arrayCopy.length; i++) {
    let current = arrayCopy[i];
    let j = i - 1;

    while (j >= 0 && arrayCopy[j] > current) {
      setComparingIndices([j, j + 1]);
      arrayCopy[j + 1] = arrayCopy[j];
      setArray([...arrayCopy]);
      await delay(getSpeed());  // Use dynamic speed
      j--;
    }
    arrayCopy[j + 1] = current;
    setArray([...arrayCopy]);
    await delay(getSpeed());  // Use dynamic speed
  }
  setComparingIndices([]);
};


// MERGE SORTING ALGORITHM
export const mergeSort = async (array, setArray, setComparingIndices, getSpeed) => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Merge two sorted arrays
  const merge = async (left, right) => {
    let result = [];
    let i = 0, j = 0;

    // Compare and merge the two halves
    while (i < left.length && j < right.length) {
      setComparingIndices([i, j]);  // Highlight the elements being compared
      await delay(getSpeed());  // Dynamic delay based on speed

      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
      setComparingIndices([]);  // Reset comparison highlight after delay
    }

    // Return the merged result
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

  // Start the merge sort
  await mergeSortHelper(array);
};

// QUICK SORTING ALGORITHM
export const quickSort = async (array, setArray, setComparingIndices, getSpeed) => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      setComparingIndices([j, high]);
      await delay(getSpeed());  // Use dynamic speed
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await delay(getSpeed());  // Use dynamic speed
      }
      setComparingIndices([]);
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  await quickSortHelper(array, 0, array.length - 1);
};

