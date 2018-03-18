function repeatsTimes(arr, val, times) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            count++;
        } else {
            count = 0;
        }
        if (count === times) {
            return true;
        }
    }
    return false; 
}

export { repeatsTimes }