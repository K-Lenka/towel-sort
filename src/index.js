// You should implement your task here.

module.exports = function towelSort(matrix) {
    var newMatrix;
    if (!matrix || !matrix.length) {
        return [];
    }

    for (let i = 1; i < matrix.length; i += 2) { // This prints the array element at the odd indices 
        matrix[i].reverse();
    }
    newMatrix = [].concat(...matrix)
    return newMatrix;

}
