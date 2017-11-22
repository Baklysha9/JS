$ ('document').ready(function(){
	loadGoods();
});
function loadGoods(){
	//загружаю товары на страницу
	$.getJSON('goods.json', function(data) {
		//console.log(data);
		var out ='';
		for (var key in data){
			out+='<div class = "card">';
			out+='<h3>'+data[key]['name']+'</h3>';
			out+='<p>Цена: '+data[key]['cost']+'</p>';
			out+='<img src="'+data[key].img+'">';
			out+='<h4>'+data[key]['description']+'</h3>';
			out+='</div>';
		}
		$('#goods').html(out);
	})
}