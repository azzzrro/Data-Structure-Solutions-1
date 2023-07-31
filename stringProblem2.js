function code(str,n){
    const key='abcdefghijklmnopqrstuvwxyz'
    let result=''

    for(let i=0;i<str.length;i++){
        let char=str[i]
        let index=key.indexOf(char)

        if(index!==-1){
            let newindex=(index+n)%26
            let newchar=key[newindex]

            result+=newchar
        }else{
            result+=char
        }
    }

    return result
}

console.log(code("azhar",2));



/////////////////////////////////////////////////////////////////////////////



function readLine(str){

    let str2=str.split("")
    
    for(let i=0;i<str2.length;i++){
        for(let j=i+1;j<str2.length;j++){
            if(str2[i]==str2[j]){
                str2.splice(j,1)
                j--
            }
        }
    }
    let result=str2.join("")
    return result
    

}


let string="azzhar"
let response=readLine(string)
console.log(response)



/////////////////////////////////////////////////////////////////////////////



function second(str){
    let str2=str.split("")

    for(let i=1;i<str2.length;i+=2){
        str2[i]="*"
    }
    return str2.join("")
}

let str="haihello"
let result=second(str)
console.log(result);