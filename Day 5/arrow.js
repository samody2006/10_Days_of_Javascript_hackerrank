function modifyArray(nums) {
    nums.map((num) => {
        if (num % 2 === 0) {
            return num * 2;
        } else {
            return num * 3;
        }
    });
}

function modifyArray(nums) {
    let newNums = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            newNums.push(num * 2);
        } else {
            newNums.push(num * 3);
        }
    }
    return newNums;
}