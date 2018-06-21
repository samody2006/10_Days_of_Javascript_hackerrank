/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    const sortedArray = nums.sort((x, y) => x - y);
    const sortedUniqueArray = sortedArray.filter((element, index, self) => {
        return index === self.indexOf(element);
    });

    return sortedUniqueArray[unique_sortedArray.length - 2];
}