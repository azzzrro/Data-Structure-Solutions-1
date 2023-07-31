function binary(arr,x){
    let start=0
    let end=arr.length-1

    for(let i=0;i<arr.length;i++){
        let middle=Math.floor((end+start)/2)
        if(arr[middle]==x){
            return middle
        }else if(arr[middle]<x){
            start=middle+1
        }else if(arr[middle]>x){
            end=middle-1
        }
    }
}

let arr=[1,2,3,4,5]
let res=binary(arr,2)
console.log(res);