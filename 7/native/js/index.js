const $ =(e)=> {return document.querySelector(e)};
const on =(e,cb)=> {$(e).addEventListener('click',cb)}
const hide =(e)=>{$(e).classList.add('hide');$(e).classList.remove('show')}
const show =(e)=>{$(e).classList.add('show');$(e).classList.remove('hide')}
hide('.img');
hide('.bk');
hide('.box2');
hide('.box3');
on('.i1',()=>{
	show('.img');
});
on('.b1',()=>{
	show('.box1');
	hide('.box2');
	hide('.box3');
	$('.b1').style.backgroundColor='#eee';
	$('.b2').style.backgroundColor='white';
	$('.b3').style.backgroundColor='white';
});
on('.b2',()=>{
	show('.box2');
	hide('.box1');
	hide('.box3');
	$('.b2').style.backgroundColor='#eee';
	$('.b1').style.backgroundColor='white';
	$('.b3').style.backgroundColor='white';
})
on('.b3',()=>{
	show('.box3');
	hide('.box1');
	hide('.box2');
	$('.b3').style.backgroundColor='#eee';
	$('.b1').style.backgroundColor='white';
	$('.b2').style.backgroundColor='white';
})
on(".i1",(e)=>{
	show('.bk');
	show('.img');
	$('.img').classList.add('i1');
});
on(".i2",(e)=>{
	show('.bk');
	show('.img');
	$('.img').classList.add('i2');
});
on(".i3",(e)=>{
	show('.bk');
	show('.img');
	$('.img').classList.add('i3');
});
on(".i4",(e)=>{
	show('.bk');
	show('.img');
	$('.img').classList.add('i4');
});
on(".i5",(e)=>{
	show('.bk');
	show('.img');
	$('.img').classList.add('i5');
});
on(".i6",(e)=>{
	show('.bk');
	show('.img');
	$('.img').classList.add('i6');
});
on('.img',(e)=>{
	$('.img').className = "img hide";
	hide('.bk');
})
on('.bk',()=>{
	$('.img').className = 'img hide';
	hide('.bk');	
});
on('.addBtn',()=>{
	var len = document.querySelectorAll('tr').length;
	var tr=document.createElement("tr");
	$('table').appendChild(tr);
	tr.innerHTML="<td class=\"t1\">"+(len+1)+"</td><td class=\"t2\"></td><td class=\"t3\">Delete</td>";
	var tdList = document.querySelectorAll('.t3');
	for(i = 0; i < tdList.length; i++) {
	    var item = tdList[i];
	    item.addEventListener('click', del);
	}
})
function del(e){
	let t=e.currentTarget;
	t.parentNode.remove();
	reload();
}
function reload(){
	var len = document.querySelectorAll('tr').length;
	var tdList = document.querySelectorAll('.t1');
	for(i=0;i<len;i++){
		tdList[i].innerText=(i+1);
	}		
}

