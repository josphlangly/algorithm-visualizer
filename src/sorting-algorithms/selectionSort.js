export const selectionSort = async (array, setArray, setComparingIndices, setSortedIndices, getSpeed, paused) => {
  let arrayCopy = [...array];
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    if (paused) break;  // Pause functionality
    let minIndex = i;
    for (let j = i + 1; j < arrayCopy.length; j++) {
      setComparingIndices([minIndex, j]); // Highlight the elements being compared
      await delay(getSpeed()); // Dynamic speed control

      if (arrayCopy[j] < arrayCopy[minIndex]) {
        minIndex = j;
      }
      setComparingIndices([]); // Reset comparison highlight
    }

    if (minIndex !== i) {
      [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];  // Swap elements
      setArray([...arrayCopy]);
      await delay(getSpeed());  // Use dynamic speed after swap
    }

    setSortedIndices([i]); // Mark this index as sorted
    setArray([...arrayCopy]);
    await delay(getSpeed()); // Dynamic speed control after each pass
  }
  setSortedIndices([]); // Reset sorted indices after completion
};
