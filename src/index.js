// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) return []; //проверим что массив и что он не пустой

    let new_arr = [];
    new_arr = matrix.reduce((acc, cur, i) => {
        cur.sort((a, b) => (!(i & 1) ? a - b : b - a)).map((e) => acc.push(e));
        return acc;
    }, []);

    return new_arr;
};

// const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

// console.log(towelSort(matrix));
