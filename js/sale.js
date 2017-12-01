var cart = {}; // моя корзина
$ ('document').ready(function(){
	loadGoods();
	checkCart();
	showMiniCart();

});
function loadGoods(){
	//загружаю товары на страницу
	$.getJSON('sale.json', function(data) {
		//console.log(data);
		var out ='';
		for (var key in data){
			out+='<div class = "card">';
			out+='<h3>'+data[key]['name']+'</h3>';
			out+='<p>Цена: '+data[key]['cost']+'</p>';
			out+='<img src="'+data[key].img+'">';
			out+='<h4>'+data[key]['description']+'</h3>';
			out+='<button class="add-to-cart" data-art="'+key+'">В корзину</button>';
			out+='</div>';
		}
		$('#sale').html(out);
		$('button.add-to-cart').on('click', addToCart);
 	});

 	
}
 	function addToCart(){
 		//добавляем товары в корзину
 		var articul = $(this).attr('data-art');
 		if (cart[ articul]!=undefined) {
 			cart[articul]++;
 		}
 		else {
 			cart[articul]=1;
 		}
 		localStorage.setItem('cart', JSON.stringify(cart));
 		//console.log(cart);
 		showMiniCart();
 	}

 	function checkCart(){
 		//проверяю наличие корзины в localstorage
 		if (localStorage.getItem('cart')!= null) {
 			cart = JSON.parse (localStorage.getItem('cart'));
 		}
 	}

 	function showMiniCart(){
 		//показываю содержимое корзины 
 		var out = '';
 		for (var w in cart){
 			out += w + '----' + cart[w]+'<br>';
 		}
 		$('#mini-cart').html(out);
 	}
