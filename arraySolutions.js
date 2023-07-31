function reverse(array) {
    let b = [];
    for (let i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {}
    }
    return b;
}

function rotation(array, d) {
    for (let i = 0; i < d; i++) {
        temp = array[0];

        for (let j = 0; j < array.length; j++) {
            array[j] = array[j + 1];
        }
        array[array.length - 1] = temp;
    }
    return array;
}

function sparse(array, check) {
    var b = [];
    for (let i = 0; i < check.length; i++) {
        count = 0;

        for (let j = 0; j < array.length; j++) {
            if (check[i] == array[j]) {
                count++;
            }
        }
        b.push(count);
    }
    return b;
}

function unique(arr) {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count === 1) b.push(arr[i]);
    }
    return b;
}
