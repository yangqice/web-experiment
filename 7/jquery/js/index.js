$(init)
function init() {
	$('.img').hide();
	$('.bk').hide();
	$('.box2').hide();
	$('.box3').hide();
	$('.top').on('click','.b1',()=>{
		$('.box1').show();
		$('.box2').hide();
		$('.box3').hide();
		$('.b1').css('background','#eee');
		$('.b2').css('background','white');
		$('.b3').css('background','white');
	})
	$('.top').on('click','.b2',()=>{
		$('.box2').show();
		$('.box1').hide();
		$('.box3').hide();
		$('.b2').css('background','#eee');
		$('.b1').css('background','white');
		$('.b3').css('background','white');
	})
	$('.top').on('click','.b3',()=>{
		$('.box3').show();
		$('.box1').hide();
		$('.box2').hide();
		$('.b3').css('background','#eee');
		$('.b1').css('background','white');
		$('.b2').css('background','white');
	})
	$('.box1').on('click',".i1",(e)=>{
		$('.bk').fadeIn(1000);
		$('.img').fadeIn(1000);
		$('.img').addClass('i1');

	});
	$('.box1').on('click',".i2",(e)=>{
		$('.bk').fadeIn(1000);
		$('.img').fadeIn(1000);
		$('.img').addClass('i2');

	});
	$('.box1').on('click',".i3",(e)=>{
		$('.bk').fadeIn(1000);
		$('.img').fadeIn(1000);
		$('.img').addClass('i3');

	});
	$('.box1').on('click',".i4",(e)=>{
		$('.bk').fadeIn(1000);
		$('.img').fadeIn(1000);
		$('.img').addClass('i4');

	});
	$('.box1').on('click',".i5",(e)=>{
		$('.bk').fadeIn(1000);
		$('.img').fadeIn(1000);
		$('.img').addClass('i5');

	});
	$('.box1').on('click',".i6",(e)=>{
		$('.bk').fadeIn(1000);
		$('.img').fadeIn(1000);
		$('.img').addClass('i6');

	});

	$('.img').on('click',()=>{
		$('.img').fadeOut(1000,()=>{
			$('.img').attr('class','img');
		})
		$('.bk').fadeOut(1000);
	})
	$('.bk').on('click',()=>{
		$('.img').fadeOut(1000,()=>{
			$('.img').attr('class','img');
		})
		$('.bk').fadeOut(1000);
	});

	$('.box2').on('click','.addBtn',(e)=>{
		var len = $('table tr').length;
		var tr="<tr><td class=\"t1\">"+(len+1)+"</td><td class=\"t2\"></td><td class=\"t3\">Delete</td></tr>"
		$('table').append(tr);
	})
	$('table').on('click','.t3',(e)=>{
		let t=e.currentTarget;
		$(t).parent().remove();
		reload();
	});

}
function reload(){
	var len=$("table tr").length;
	for(i=0;i<len;i++){
		$('table tr:eq('+i+') .t1').text(i+1);
	}		
}