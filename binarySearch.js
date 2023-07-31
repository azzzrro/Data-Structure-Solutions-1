function binary(array,x){
    let start=0
    let end=array.length-1

    while(start<=end){
        let middle=Math.round((start+end)/2)
        if(array[middle]==x){
            return middle
        }
        else if(array[middle]>x){
            end=middle-1   
        }
        else if(array[middle]<x){
            start=middle+1
            
        }
    }return 0
}

let arr=[1,2,3,4,5,6]
let x=6
let result=binary(arr,x)
if (result!=0){
console.log(result)}
else{
    console.log("not found");
}