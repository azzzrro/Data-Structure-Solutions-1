

/////////////////////////////Linked List Workout /////////////////////////////


class node{
    constructor(value,next=null){
        this.value=value
        this.next=next
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
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
    }

    addIndex(index,value){
        let newNode=new node(value)
        let previous=null
        let current=this.head
        let iter=0
        while(iter<index){
            previous=current
            current=current.next
            iter++
        }
        previous.next=newNode
        newNode.next=current
        this.length++
    }

    toLink(array){
        let head=new node(array[0])
        let current=head

        for(let i=1;i<array.length;i++){
            let newNode=new node(array[i])
            current.next=newNode
            current=newNode

        }
        return head
    }


    headInsert(value){
        let newNode=new node(value)
        newNode.next=this.head
        this.head=newNode
    }

    before(value,newValue){
        
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
                

            }else{
                this.head=newNode
            }
        }
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

    dupli(){
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

    rev()
}


let ll=new linkedlist

let array=[1,2,3]
let res=ll.toLink(array)
ll.add(20)
ll.add(20)
ll.add(20)
ll.dupli()
ll.add(30)
ll.del(20)
ll.addIndex(2,30)
console.log(ll.head);