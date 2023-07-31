function readLine(str) {
    let str2 = str.split("");
    let len = str2.length;

    for (let i = 0; i < len; i++) {
        if (str2[i] == str2[i + 1]) {
            for (let j = i; j < len; j++) {
                if (i !== len - 2) {
                    str2[j] = str2[j + 2];
                    str2[j + 1] = str2[j + 3];
                }
            }
            len = len - 2;
        }
    }
    if (str2[len - 1] == str2[len - 2]) {
        str2.length = len - 2;
    }
    let result = str2.join("");
    return result;
}

let str = "aaabccddd";
let result = readLine(str);
