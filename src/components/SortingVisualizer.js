import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/SortingVisualizer.css';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from '../index.js';  // Import all algorithms
import SpeedControl from './SpeedControl';
import SortingControls from './SortingControls';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const pausedRef = useRef(false);

  const generateRandomArray = useCallback(() => {
    const randomArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 90) + 10);
    setArray(randomArray);
  }, []);

  useEffect(() => {
    generateRandomArray();
  }, [generateRandomArray]);

  const handleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);

    pausedRef.current = false;

    switch (selectedAlgorithm) {
      case 'bubbleSort':
        await bubbleSort(array, setArray, setComparingIndices, setSortedIndices, () => speed, pausedRef);
        break;
      case 'selectionSort':
        await selectionSort(array, setArray, setComparingIndices, setSortedIndices, () => speed, pausedRef);
        break;
      case 'insertionSort':
        await insertionSort(array, setArray, setComparingIndices, setSortedIndices, () => speed, pausedRef);
        break;
      case 'mergeSort':
        await mergeSort(array, setArray, setComparingIndices, setSortedIndices, () => speed, pausedRef);
        break;
      case 'quickSort':
        await quickSort(array, setArray, setComparingIndices, setSortedIndices, () => speed, pausedRef);
        break;
      default:
        break;
    }

    setIsSorting(false);
  };

  return (
    <div className="app-container">
      <SortingControls
        generateRandomArray={generateRandomArray}
        handleSort={handleSort}
        setSelectedAlgorithm={setSelectedAlgorithm}
        isSorting={isSorting}
        paused={pausedRef.current}
        setPaused={() => pausedRef.current = ! pausedRef.current}
      />
      <SpeedControl speed={speed} setSpeed={setSpeed} isSorting={isSorting} />

      <div className="visualizer-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value}px`,
              backgroundColor: comparingIndices.includes(index)
                ? 'red'
                : (sortedIndices.includes(index) ? 'green' : 'steelblue')
            }}
          ></div>
        ))}
      </div>

      {isSorting && <div className="loading-spinner"></div>}
    </div>
  );
};

export default SortingVisualizer;
