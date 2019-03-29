function selectionSort(arr) {
    // copying array to avoid global leakage
    const newArr = [...arr];
    // Loop for (numOfElements - 1)
    for (let i = 0; i < newArr.length - 1; i++) {
        // let first unsorted element equals minimum
        let minIndex = i;
        // loop for (numOfUnsortedElements)
        for (let j = i; j < newArr.length; j++) {
            // if (currElement < minimum)
            if (newArr[j] < newArr[minIndex]) {
                // let minimum equals current element
                minIndex = j;
            }
        }
        // swap(firstUnsortedElement, minimum)
        [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]];
    }
    return newArr;
}

function insertionSort(arr) {
    // Copying array to avoid global leakage
    const newArr = [...arr];
    // Loop for each element starting from 2nd element
    for (let i = 1; i < newArr.length; i++) {
        // Extract currElement from array
        const [extractedElement] = newArr.splice(i, 1);
        // Set initial insertion index
        let insertIndex = 0;
        // Loop for each element before extractedElement
        for (let j = i - 1; j >= 0; j--) {
            // If extractedElement larger than currElement
            if (newArr[j] < extractedElement) {
                // set Insertion index to currIndex + 1
                insertIndex = j + 1;
                break;
            }
        }
        // Insert extractedElement to newArr at insertIndex
        newArr.splice(insertIndex, 0, extractedElement);
    }
    return newArr;
}

function bubbleSort(arr) {
    const newArr = [...arr];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < newArr.length - 1; i++) {
            if (newArr[i] > newArr[i + 1]) {
                [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return newArr;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    result.push(...left, ...right);
    return result;
}

const arr = [4, 5, 2, 1, 20, 50, 1, 42];

console.log('Original array: ', arr, 'Complexity');
console.log('Selection sort: ', selectionSort(arr), '  O(n^2)');
console.log('Insertion sort: ', insertionSort(arr), '  O(n^2)');
console.log('Bubble sort:    ', bubbleSort(arr), '  O(n^2)');
console.log('Merge sort:     ', mergeSort(arr), '  O(n*log(n))');
