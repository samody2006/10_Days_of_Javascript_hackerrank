/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    const sortedArray = nums.sort((x, y) => x - y);
    const unique_sortedArray = sortedArray.filter((element, index, self) => {
        return index === self.indexOf(element)
    });

    return unique_sortedArray[unique_sortedArray.length - 2];
}