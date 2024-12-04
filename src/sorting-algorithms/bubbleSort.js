import { animateSorting } from "../animations/animations";

// BUBBLE SORTING ALGORITHM
export const bubbleSort = async (array, setArray, setComparingIndices, setSortedIndices, getSpeed, pausedRef) => {
  let arrayCopy = [...array];

  const actions = [];

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    if (pausedRef.current) return;
    for (let j = 0; j < arrayCopy.length - i - 1; j++) {
      if (pausedRef.current) return; // Pause functionality

      actions.push({ type: "compare", indices: [j, j + 1] });

      setComparingIndices([j, j + 1]); // Highlight the pair being compared
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Swap elements
        actions.push({ type: "swap", indices: [j, j + 1] });
        let temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;
      }
    }
  }

  setSortedIndices(arrayCopy.map((_, index) => index)); // Set sorted index
  await animateSorting(actions, setArray, setComparingIndices, getSpeed, pausedRef);
};
