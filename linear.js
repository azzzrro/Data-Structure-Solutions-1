function search(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i
        }
    }return "not found"
}


let arr=[1,2,3,4,5]
let response=search(arr,3)

console.log(response);


/////////////////////////////////////////////////////////////////////////////


function search(arr,x){
    let found=false
    let index=0

    arr.forEach((element,i) => {
        if(arr[i]===x&& !found){
            found=true
            index=i
        }
        
    })
    return index
    
    
}

arr=["hey","hello","hai"]
x="hai"
let result=search(arr,x)
if(result!==0){
    console.log(result);
}else{
    console.log("not found");
}

