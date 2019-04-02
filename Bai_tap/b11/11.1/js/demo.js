$(function(){
	$('#add').on('click',function(){
		var input=$('#input').val();
		$('#content').append(`<tr>
				<td class="checkbox"></td>
				<td class="ip">`+input+`</td>
				<td class="btn">X</td>
			</tr>`);
		$('#input').val("");
	});
});

// $('.btn').click(function(){
// 	$(this).parent().remove();
// })
$('body').on('click','.btn',function(){
	$(this).parent().remove();
})

$('body').on('click','tr',function(){
	var check=$(this).children('.checkbox').html()
	if(check==''){
		$(this).children('.checkbox').text('✓')
	} else {
		$(this).children('.checkbox').text('')

		
	}

})