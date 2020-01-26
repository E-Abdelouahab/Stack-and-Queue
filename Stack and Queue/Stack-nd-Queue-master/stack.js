class Element {
	constructor(data,next = null,prev = null){
		this.data=data;
		this.next=next;
		this.prev=prev;
	}
}

class Stack {
	constructor(){
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}

	pushToList(data){
		var element = new Element(data);
		if(this.length==0){
			this.pointer  = this.tail =  this.head  = element;
			
		}else
		{
			this.tail.next = element;
			element.prev = this.tail;
			this.tail=element;
			
		}

		this.length++;
		return element;

	}

	popFromList(){
		if(this.length==0){
			return;
		}
		var element=this.tail;

		if(this.length == 1){
			this.head = null;
			this.tail = null;
			this.pointer = null;
	
		}else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			element.prev = null;
			this.pointer = this.tail;
		
		}

		this.length--;
		return;

	}

	dequeueFromList(){
		if(this.length == 0){
			return;
		}
		var element = this.head;
		if(this.length == 1){
			this.head=null;
			this.tail=null;
			this.pointer=null;
			
		}else {
			this.head = element.next;
			this.head.prev = null;
			element.next = null;
			this.pointer = this.head;
			

		}
		this.length--;
		return;
	}

	next(){
		if(this.pointer && this.pointer.next){
			this.pointer = this.pointer.next;
		}
	}

	previous(){
		if(this.pointer && this.pointer.prev){
			this.pointer = this.pointer.prev;
		}
	}

	dispElement(){
		if(this.pointer){
			return this.pointer.data;
		} else return "No Data";
	}



}


let stack = new Stack();
let queue = new Stack();

// STACK
function empiler(){
	stack.pushToList(document.getElementById("data").value);
	document.getElementById('data').value = '';
}

function depiler(){
	stack.popFromList();

}

function Next(){
	stack.next();
	document.getElementById("res").innerHTML = stack.dispElement();
}

function Prev(){
	stack.previous();
	document.getElementById("res").innerHTML = stack.dispElement();

}

function printElement(){
	document.getElementById("res").innerHTML = stack.dispElement();
}

//QUEUE

function enfiler(){
	queue.pushToList(document.getElementById("data2").value);
	document.getElementById('data2').value = '';

}
function defiler(){
	queue.dequeueFromList();
}

function Next1(){
	queue.next();
	document.getElementById("res1").innerHTML = queue.dispElement();
}

function Prev1(){
	queue.previous();
	document.getElementById("res1").innerHTML = queue.dispElement();

}

function printElement1(){
	document.getElementById("res1").innerHTML = queue.dispElement();
}