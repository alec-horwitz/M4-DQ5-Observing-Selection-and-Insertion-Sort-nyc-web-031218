function selectionSort(arr) {
	let length = arr.length;
	for (let i = 0; i < length - 1; i++) {
		//Number of passes
		let min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
		for (let j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
			if (arr[j] < arr[min]) { //Compare the numbers
				min = j; //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			//After each pass, if the current min num != initial min num, exchange the position.
			//Swap the numbers
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
}
