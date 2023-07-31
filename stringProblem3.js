function code(str){
    let key="abcdefghijklmnopqrstuvwxyz"
    let result=""

    for(i=0;i<str.length;i++){
        let char=str[i]
        let index=key.indexOf(char)

        if(index!==-1){
            let newIndex=(index+2)%26
            let newchar=key[newIndex]
            result+=newchar
        }else
        result+=char

        
    }return result
   
}

let str="azhar"
let res=code(str)
console.log(res);