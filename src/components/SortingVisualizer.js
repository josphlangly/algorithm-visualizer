import React, { useState, useEffect, useCallback } from 'react';
import '../styles/SortingVisualizer.css';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from '../sorting-algorithms/SortingAlgorithms.js';
import { getBubbleSortActions } from '../sorting-algorithms/bubbleSort.js';
import { animateSorting } from '../animations/animations.js';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [speed, setSpeed] = useState(500);
  const [isSorting, setIsSorting] = useState(false); // New state for tracking sorting
  const speedRef = React.useRef(500);
  const MAX_DELAY = 5000; // Maximum delay in milliseconds

  const handleSpeedChange = (e) => {
    const sliderValue = Number(e.target.value); // Slider value
    const newSpeed = MAX_DELAY - sliderValue; // Inverted logic
    setSpeed(newSpeed); // Update speed state
    speedRef.current = newSpeed; // Update ref for animations
  };

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

    let actions;

    switch (selectedAlgorithm) {
      case 'bubbleSort':
        actions = getBubbleSortActions(array);  // Passing speed dynamically
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

    if (actions) {
      await animateSorting(actions, setArray, setComparingIndices, () => speedRef.current);
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
        step="100"
        value={MAX_DELAY - speed}
        onChange={handleSpeedChange}
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
