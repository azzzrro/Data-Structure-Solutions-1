
/////////////////////////////Linked List Workout 1/////////////////////////////


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
            }
            else{
                this.tail.next=newNode
                this.tail=newNode
            }
            this.length++
            console.log(newNode.value)
            
        
    }

    toArray(){
        let current=this.head
        var b=[]
        while(current){
            b.push(current.value)
            current=current.next

        }
        console.log(b)
    }
}

let ll=new linkedlist

ll.add(100)
ll.add(200)
ll.add(300)

ll.toArray()


/////////////////////////////Linked List Workout 2/////////////////////////////


class node{
    constructor(value,next=null){
        this.value=value
        this.next=next
    }
}

function toLink(arr){
    let head=new node(arr[0])
    let current=head

    for(let i=1;i<arr.length;i++){
        let newNode=new node(arr[i])
        current.next=newNode
        current=newNode
    }
    return head
}

var arr=["hai","hello","ok"]
let result=toLink(arr)
console.log(result);



/////////////////////////////Linked List Workout 3/////////////////////////////



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
        let newNode= new node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        
    }

    deleteNode(value){
        let current=this.head
        let previous=null

        while(current&&current.value!==value){
            previous=current
            current=current.next
        }
        if(current){
            if(previous){
                previous.next=current.next
            }
            else{
                this.head=current.next
            }
        }
        return this.head
    }

    insertAfter(value,newvalue){
        let current=this.head

        while(current&&current.value!==value){
            current=current.next
        }
        if(current){
            let newNode=new node(newvalue)
            newNode.next=current.next
            current.next=newNode
        }

        return this.head
    }

    insertBefore(value,newvalue){
        let current=this.head
        let previous=null

        while(current&&current.value!==value){
            previous=current
            current=current.next
        }

        if(current){
            let newNode=new node(newvalue)
            newNode.next=current
            if(previous){
                previous.next=newNode
            }
            else{
                this.head=newNode
            }

        }
        return this.head
    }

    print(){
        let current=this.head

        while(current){
            console.log(current.value)
            current=current.next
        }
    }

    toArray(){
        let current=this.head
        let b=[]

        while(current){
            b.unshift(current.value)
            current=current.next
        }
        console.log(b)
        

    }

    // dupli(){
    //     let current=this.head

    //     while(current!==null&&current.next!==null){
    //         if(current.value===current.next.value){
    //             current.next=current.next.next
    //         }
    //         else{
    //             current=current.next
    //         }
    //     }

    // }

    dupli(){
        let seen = new Set()
        let current=this.head
        let previous=null

        while(current!==null){
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

    insertIndex(index,value){
        let newNode=new node(value)
        let current=this.head
        let previous=null
        if(index<0||index>this.length){
            console.log("sorry");
        }else if(index==0){
            newNode.next=this.head
            this.head=newNode

        }

        
        
        
        else{
            
            let it=0
            while(it<index){
                previous=current
                current=current.next
                it++
            }
            previous.next=newNode
            newNode.next=current
            this.length++
        }
    }

}

let linked=new linkedlist
linked.add(100)
linked.add(300)
linked.insertIndex(2,200)


ll.dupli()

ll.deleteNode(200)
ll.insertBefore(300,200)
ll.print()
ll.toArray()



/////////////////////////////Linked List Workout 4/////////////////////////////



class node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    t0Link(arr){
        let head=new node(arr[0])
        let current=head

        for(let i=1;i<arr.length;i++){
            let newNode= new node(arr[i])
            current.next=newNode
            current=newNode
        }

        return head
    }
}

let list=new linkedlist
arr=[1,2,3]
let response=list.t0Link(arr)
console.log(response);



/////////////////////////////Linked List Workout 5/////////////////////////////



class node{
    constructor(data){
        this.data=data
        this.prev=null
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    toadd(value){
        let newNode=new node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            newNode.prev=this.tail
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
}

let linkedObj=new linkedlist
linkedObj.toadd(100)
linkedObj.toadd(200)

console.log(linkedObj);



/////////////////////////////Linked List Workout 6/////////////////////////////



class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    toAddFirst(value){
        let newNode=new node(value)
        newNode.next=this.head
        this.head=newNode
    
    }

}

let listObj=new linkedlist()
listObj.toAddFirst(100)
listObj.toAddFirst(200)
listObj.toAddFirst(300)
console.log(listObj.head);