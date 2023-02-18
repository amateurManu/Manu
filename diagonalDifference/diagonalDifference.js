function diagonalDifference(arr) {
    // Write your code here
    let primary = 0;
    let secondary = 0;
    for (let i=0; i<arr.length; i++){
        primary += arr[i][i];
        secondary += arr[arr.length - 1 - i][i];
    }
    return Math.abs(primary - secondary);
}