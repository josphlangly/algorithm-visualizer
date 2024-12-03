export const getBubbleSortActions = (array) => {
  const actions = [];
  const arrayCopy = [...array];

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    for (let j = 0; j < arrayCopy.length - i - 1; j++) {
      actions.push({ type: "compare", indices: [j, j + 1] });

      if (arrayCopy[j] > arrayCopy[j + 1]) {
        actions.push({ type: "swap", indices: [j, j + 1] });

        let temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;
      }
    }
  }

  return actions;
};
