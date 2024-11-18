import React, { useState, useEffect, useCallback } from 'react';
import '../styles/SortingVisualizer.css';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from '../algorithms/SortingAlgorithms.js';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false); // New state for tracking sorting

  // Memoize the function to prevent it from being recreated on each render
  const generateRandomArray = useCallback(() => {
    const randomArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 90) + 10);
    setArray(randomArray);
  }, []);  // Empty dependency array means the function will never change

  useEffect(() => {
    generateRandomArray();  // Calls the function to fill the array when the component loads
  }, [generateRandomArray]);  // Now it's safe to use generateRandomArray here

  // Function to handle sorting based on selected algorithm
  const handleSort = async () => {
    if (isSorting) return;  // Prevent multiple sorts
    setIsSorting(true);

    switch (selectedAlgorithm) {
      case 'bubbleSort':
        await bubbleSort(array, setArray, setComparingIndices, () => speed);  // Passing speed dynamically
        break;
      case 'selectionSort':
        await selectionSort(array, setArray, setComparingIndices, () => speed);
        break;
      case 'insertionSort':
        await insertionSort(array, setArray, setComparingIndices, () => speed);
        break;
      case 'mergeSort':
        await mergeSort(array, setArray, setComparingIndices, () => speed);
        break;
      case 'quickSort':
        await quickSort(array, setArray, setComparingIndices, () => speed);
        break;
      default:
        break;
    }

    setIsSorting(false); // Reset sorting state after completion
  };


  return (
    <div>
      <button onClick={generateRandomArray} disabled={isSorting}>Generate New Array</button>
      <select onChange={(e) => setSelectedAlgorithm(e.target.value)} disabled={isSorting}>
        <option value="bubbleSort" title="Bubble Sort: Repeatedly swaps adjacent elements if they are in the wrong order.">Bubble Sort</option>
        <option value="selectionSort" title="Selection Sort: Finds the smallest element and swaps it into place.">Selection Sort</option>
        <option value="insertionSort" title="Insertion Sort: Builds the sorted portion one element at a time.">Insertion Sort</option>
        <option value="mergeSort" title="Merge Sort: Divides the array into two halves, sorts and merges them.">Merge Sort</option>
        <option value="quickSort" title="Quick Sort: Divides and conquers by choosing a pivot element and partitioning the array.">Quick Sort</option>
      </select>

      <label>Speed:</label>
      <input
        type="range"
        min="10"
        max="1000"
        step="10"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
      />

      <button onClick={handleSort} disabled={isSorting}>Start Sorting</button>

      <div className="visualizer-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value}px`,
              backgroundColor: comparingIndices.includes(index) ? 'red' : 'steelblue',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
