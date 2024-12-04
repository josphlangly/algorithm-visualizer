export const quickSort = async (array, setArray, setComparingIndices, setSortedIndices, getSpeed, paused) => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (paused) break;  // Pause functionality

      setComparingIndices([j, high]); // Highlight the elements being compared
      await delay(getSpeed());  // Dynamic speed control

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
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
