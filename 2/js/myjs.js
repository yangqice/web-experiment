var ele = document.querySelectorAll(".m-item");
for(i=0;i<ele.length;i++){
	ele[i].addEventListener('click',doclick);
}
function doclick(e){
	let item=e.target;
	console.log(item.innerHTML);
	if(item.innerHTML=="p1"){
		alert("p1");
		item.style.color="red";
	}
	else if(item.innerHTML=="p2"){
		alert("p2");
		let h=document.querySelector('h1');
		let x=new Date();
		let year=x.getFullYear();
		let month=x.getMonth()+1;
		let day=x.getDate()
		h.innerHTML=year+(month>10?"-":"-0")+month+(day>10?"-":"-0")+day;
	}
	else if(item.innerHTML=="p3"){
		alert("p3");
		for(i=0;i<ele.length;i++){
			ele[i].classList.add("fn-active");
			console.log(ele[i]);
		}
	}
	else if(item.innerHTML=="p4"){
		alert("p4");
		let parent=document.getElementById("ul");
		let child=document.getElementById("p8");
		parent.removeChild(child);
	}
	else if(item.innerHTML=="p5"){
		alert("p5");
		window.open("http://www.taobao.com");
	}
	else if(item.innerHTML=="p6"){
		alert("p6");
		let node=document.createTextNode("p9");
		let para=document.createElement("li");
		para.appendChild(node);
		let element=document.getElementById("ul");
		element.appendChild(para);
	}
	else if(item.innerHTML=="p7"){
		alert("p7");
		let w=document.getElementById("box");
		console.log(w);
		w.style.width="100%";
	}
	else if(item.innerHTML=="p8"){
		alert("p8");
	}
}
