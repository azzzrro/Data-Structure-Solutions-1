

function countdown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    countdown(num - 1);
}

countdown(5);


/////////////////////////////////////////////////////////////////////////////


function fact(num) {
    if (num == 0) return 1;
    else {
        return num * fact(num - 1);
    }
}

let res = fact(5);
console.log(res);



/////////////////////////////////////////////////////////////////////////////



function sum(num) {
    if (num == 0) return 0;
    else {
        return num + sum(num - 1);
    }
}

let res1 = sum(6);
console.log(res1);
