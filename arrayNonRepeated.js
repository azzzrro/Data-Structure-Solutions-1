let arr = [1, 2, 3, 3, 4, 4, 5, 5];

let nonRepeated = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count === 1) {
        nonRepeated.push(arr[i]);
    }
}

console.log(nonRepeated); // [1, 2, 5]
