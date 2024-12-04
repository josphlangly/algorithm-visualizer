export const animateSorting = async (actions, setArray, setComparingIndices, getSpeed, pausedRef) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (const action of actions) {
    if (pausedRef.current) return;  // Immediately stop if paused

    const { type, indices } = action;

    if (type === "compare") {
      setComparingIndices(indices); // Highlight the compared bars
    } else if (type === "swap") {
      setArray((prevArray) => {
        const newArray = [...prevArray];
        const [i, j] = indices;
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap values
        return newArray;
      });
    }

    await delay(getSpeed()); // Use dynamic getter for current speed
    setComparingIndices([]); // Clear highlights after comparison or swap
  }
};
