# Algorithm Visualizer

A web application that visually demonstrates various common algorithms, allowing users to watch the algorithms sort an array of bars in real-time. The project offers an interactive interface with features such as dynamic speed control, a pause/resume button, and informative tooltips for each sorting algorithm.

## **Features Implemented**:

### 1. **Sorting Algorithms**:
   The following sorting algorithms are implemented and can be selected from a dropdown:
   - **Bubble Sort**: Repeatedly compares adjacent elements and swaps them if they are in the wrong order.
   - **Selection Sort**: Selects the smallest element from the unsorted portion and swaps it into place.
   - **Insertion Sort**: Builds the sorted portion of the array one element at a time.
   - **Merge Sort**: Divides the array into two halves, recursively sorts them, and merges them back together.
   - **Quick Sort**: Selects a pivot element, partitions the array, and recursively sorts the subarrays.

### 2. **Real-time Speed Control**:
   - Users can control the speed of the sorting process via a slider. The sorting speed can be adjusted during the sorting process.

### 3. **Pause and Resume**:
   - A **Pause/Resume** button allows users to pause the sorting process and resume it later.

### 4. **Tooltips**:
   - Tooltips are provided in the sorting algorithm selector to explain what each algorithm does when users hover over the options.

### 5. **Visualizer**:
   - The bars in the visualizer represent the elements of the array. They dynamically change in height based on the array values.
   - **Red bars** represent elements being compared, and **green bars** represent elements that are sorted and in their final positions.
   - The visualizer layout is responsive, adjusting for different screen sizes.

### 6. **Loading Spinner**:
   - A loading spinner appears while the sorting process is running to provide feedback to the user.

## **Planned Updates**:

### 1. **Step-by-Step Visualization**:
   - Add an option for users to step through the sorting process step-by-step, rather than running the entire sort at once. This will allow users to view each individual step of the sorting algorithm.

### 2. **Algorithm Descriptions**:
   - Implement a more detailed description of the algorithms displayed on the screen, explaining their time complexity and use cases.

### 3. **Additional Sorting Algorithms**:
   - Add more sorting algorithms like **Heap Sort**, **Radix Sort**, and **Shell Sort** to give users a broader range of algorithms to explore.

### 4. **UI Improvements**:
   - Improve the UI design by adding more visual elements, such as progress bars, algorithm-specific animations, and enhanced button styling.
   - Refine the layout for better mobile responsiveness and improve the overall aesthetic of the application.

### 5. **Performance Optimization**:
   - Optimize the performance of large datasets (i.e., arrays with more than 100 elements) to prevent lag and improve the visual experience.

### 6. **Instructions/Help Section**:
   - Create an instruction/help section to guide new users on how to interact with the visualizer and understand the algorithms.

## **How to Run the Project Locally**:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd sorting-visualizer
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in your browser to view the sorting visualizer.

## **Technologies Used**:
- **React**: The core library for building the user interface.
- **CSS**: For styling the application and the visualizer.
- **JavaScript**: For implementing the sorting algorithms and dynamic functionality.

## **License**:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---