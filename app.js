const merge = (leftArray, rightArray) => {
	let newArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// iterate through arrays checking which value is the biggest
	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		// check which index has the smallest value and add that to the array
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			newArray.push(leftArray[leftIndex]);
			leftIndex++;
		} else if (rightArray[rightIndex] < leftArray[leftIndex]) {
			newArray.push(rightArray[rightIndex]);
			rightIndex++;
		}
	}

	// now clean up any remaining items in the list (e.g. if one list is longer than another)
	let arrayRemaining = [];
	if (leftIndex < leftArray.length) {
		arrayRemaining = leftArray.slice(leftIndex);
	} else if (rightIndex < rightArray.length) {
		arrayRemaining = rightArray.slice(rightIndex);
	}

	// add the remaining elements into the array and then return it
	newArray.push(...arrayRemaining);

	return newArray;
};

const mergeSort = (array) => {
	// base condition to stop sorting
	if (array.length === 1) {
		return array;
	}

	//get the mid point of the array to split - math floor in case it's an odd number
	const mid = Math.floor(array.length / 2);

	//split into two arrays now
	const leftArray = array.slice(0, mid);
	const rightArray = array.slice(mid);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const bigArray = [20, 5, 14, 7, 9, 3, 1, 12, 6];

console.log(mergeSort(bigArray));
