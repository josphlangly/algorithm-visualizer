export const insertionSort = async (array, setArray, setComparingIndices, setSortedIndices, getSpeed, paused) => {
  let arrayCopy = [...array];
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 1; i < arrayCopy.length; i++) {
    if (paused) break;  // Pause functionality
    let current = arrayCopy[i];
    let j = i - 1;

    while (j >= 0 && arrayCopy[j] > current) {
      setComparingIndices([j, j + 1]); // Highlight the elements being compared
      arrayCopy[j + 1] = arrayCopy[j];  // Shift elements to the right
      setArray([...arrayCopy]);
      await delay(getSpeed());  // Use dynamic speed
      j--;
    }

    arrayCopy[j + 1] = current;  // Place the current element in its correct position
    setArray([...arrayCopy]);
    await delay(getSpeed());  // Use dynamic speed after placing the element

    setSortedIndices([i]); // Mark the current element as sorted
    setArray([...arrayCopy]);
  }
  setSortedIndices([]); // Reset sorted indices after completion
};
