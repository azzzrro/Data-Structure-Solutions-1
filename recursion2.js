function fact(num){
    if(num==0)
    return 1
    else{
        return num*fact(num-1)
    }
}


/////////////////////////////////////////////////////////////////////////////


function sum(num){
    if(num==0)
    return 0
    else{
        return num+sum(num-1)
    }
}


/////////////////////////////////////////////////////////////////////////////


function count(num){
    
    if(num<=0){
    console.log("done");
    return}
        console.log(num)
        count(num-1)   
}

let res1=sum(10)
let res=fact(6)
console.log(res+" "+res1);

count(5)
