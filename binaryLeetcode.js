var searchInsert=function(arr,x){
    let start=0
    let end=arr.length-1

    while(start<=end){
        let middle=Math.round((start+end)/2)

        if(arr[middle]==x){
            return middle
        }else if(arr[middle]>x){
            end=middle-1
        }else if(arr[middle]<x){
            start=middle+1
        }
    }
    let newmiddle=Math.round((start+end)/2)
    if(arr[newmiddle]!==x){
        for(let i=0;i<arr.length;i++)
                
                
        
            {
                if(x<arr[0]){
                    return 0
                }
                
            
                else if(arr[i]<x&&arr[i+1]>x){
                    return i+1
                }
            
        }
        return arr.length
    }
}

let arr=[1,2,4,6,7,8]
let result=searchInsert(arr,5)
console.log(result);