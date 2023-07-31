

/////////////////////////////Linked List Workout/////////////////////////////


class node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    add(value){
        let newNode=new node(value)
        
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            newNode.prev=this.head
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
    }

    arrayToLink(arr){
        let head=new node(arr[0])
        let current=head

        for(let i=1;i<arr.length;i++){
            let newNode=new node(arr[i])
            current.next=newNode
            current=newNode
            
        }
    
        return head
    }

    beg(value){
        let newNode=new node(value)
        this.tail.next=newNode
        this.tail=newNode

        
    }

    del(value){
        let current=this.head
        let previous=null

        while(current&&current.value!==value){
            previous=current
            current=current.next
        }
        if(current){
            if(previous){
                previous.next=current.next

            }else{
                this.head=current.next
            }
            
        }

    }

    insertAfter(value,newValue){
        
        let current=this.head
        let newNode=new node(newValue)
       

        while(current&&current.value!==value){
            
            current=current.next
        }
        if(current){
            
                
                newNode.next=current.next
                current.next=newNode
            
        }
    }

    insertBefore(value,newValue){
        let current=this.head
        let previous=null

        while(current&&current.value!==value){
            previous=current
            current=current.next
        }
        if(current){
            let newNode=new node(newValue)
            newNode.next=current
            if(previous){

                previous.next=newNode
            }
            else{
                this.head=newNode
            }
        }
    }

    print(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }

    printRev(){
        let current=this.head
        let b=[]

        while(current){
         b.unshift(current.value)
         current=current.next 
        }
        
        let head=new node(b[0])
        let curr=head

        for(let i=1;i<b.length;i++){
            let newNode=new node(b[i])
            curr.next=newNode
            curr=newNode

        }

        return head


    }

    dele(){
        let seen=new Set()
        let current=this.head
        let previous=null

        while(current){
            if(seen.has(current.value)){
                previous.next=current.next
            }
            else{
                seen.add(current.value)
                previous=current
            }
            current=current.next
        }
    }




}

let ll=new linkedlist

ll.add(100)
ll.add(200)
ll.add(300)
ll.dele()
let result =ll.printRev()
ll.insertBefore(200,400)
ll.del(300)

let arr=[1,2,3,4,5]
let response=ll.arrayToLink(arr)
ll.beg(500)
console.log(ll.head)
