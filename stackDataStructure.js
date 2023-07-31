class stack{
    constructor(){
        this.item=[]
    }


pushSatck(element)
{
    this.item.push(element)
}

popSatck()
{
    if(this.item.length==0){
        console.log("underflow");
    }else{
        this.item.pop()
    }
}

printStack()
{
    let str=""
    for(let i=0;i<this.item.length;i++){
        str+=this.item[i]+" "
        
    }
    console.log(str);
}
}

let stackObj=new stack

stackObj.pushSatck(10)
stackObj.pushSatck(20)
stackObj.pushSatck(30)
stackObj.popSatck()

stackObj.printStack()



/////////////////////////////////////////////////////////////////////////////




class node{
    constructor(value){
        this.top=value
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
        this.length=0
    }

    Push(value){
        let newNode=new node(value)
        if(!this.top){
            this.top=newNode
        }else{
            newNode.next=this.top
            this.top=newNode
        }
    }

    Pop(){
        this.top=this.top.next
        this.length--
    }
}

let st=new stack
st.Push(100)
st.Push(200)
st.Push(300)
st.Pop()

console.log(st.top)