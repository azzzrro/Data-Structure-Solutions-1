
function change(str){

    let str2=str.split("")

    for(let i=0;i<str2.length;i++){
        
        if(i%2!==0){
            str2[i]="#"
        }
    }

    let res=str2.join("")
    return res

}

let str="GREETINGS"
let result=change(str)
console.log(result);
