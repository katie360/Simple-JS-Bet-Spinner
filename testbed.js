let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
// accessing the first and last element
console.log(MathScore[0][0]);
console.log(MathScore[MathScore.length - 1][(MathScore[MathScore.length - 1]).length - 1]);

let numberArr = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
];
//   adding all the elements

let sum = 0;

numberArr.forEach(row => {
    row.forEach(element => {
        sum += element;
    }

    )
})
    ;
console.log("TOTAL SUM", sum)

// creating a 2D array

let arr = [];
let rows = 4;
let cols = 3;
let value = 0;

for (i = 0; i < rows; i++) {
    arr[i] = [];
    for (j = 0; j < cols; j++) {
        arr[i][j] = value++;
    }
}
console.table(arr)