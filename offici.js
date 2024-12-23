function findMin(numbers) {
    let min = numbers[0]; // Assuming numbers array is not empty
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min; // Return the smallest value found in the numbers array
}
