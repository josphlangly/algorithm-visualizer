import React from 'react';

const SortingControls = ({ generateRandomArray, handleSort, setSelectedAlgorithm, isSorting, paused, setPaused }) => {
  return (
    <div>
      <button onClick={generateRandomArray} disabled={isSorting}>Generate New Array</button>
      <select onChange={(e) => setSelectedAlgorithm(e.target.value)} disabled={isSorting}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
      </select>

      <button onClick={handleSort} disabled={isSorting}>Start Sorting</button>
      <button onClick={() => setPaused(!paused)}>
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default SortingControls;
