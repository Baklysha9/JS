var cart = {}; //корзина

$.getJSON('goods.json', function (data){
	var goods = data; //все товары в массиве
	//console.log(goods);
	checkCart();
	//console.log(cart);
	showCart(); //вывожу товары на страницу

	function showCart() {
		if ( $.isEmptyObject(cart) ) {
			//корзина пуста
			var out = 'Корзина пуста. Добавьте товар в корзину <a href="index.html">главная страница</a>';
			$('#my-cart').html(out);
		}
		else {
		var out = '';
		var sum=0;
		for (var key in cart){
				out +='<button class="delete" data-art="'+key+'">×</button>';
				out += '<img src="'+goods[key].img+'" width="100" >';
				out += '<h3>"'+goods[key].name+'"</h3>';
				out +='<div class="sena">'
				out += '<button class="minus" data-art="'+key+'">-</button>';
				out += cart[key];
				out += '<button class="plus" data-art="'+key+'">+</button>';
				out += '<p>'+cart[key]*goods[key].cost+'р</p>';
				out +='</div>'
				out += '<br>';
				sum += +cart[key]*goods[key].cost;
				kol = goods[key].kol;
		}
		$('#my-cart').html(out);
		$('.itog').html('Итого: '+sum+' руб');
		$('.plus').on('click', plusGoods);
		$('.minus').on('click', minusGoods);
		$('.delete').on('click', deleteGoods);
	}
}
		function plusGoods() {
			var articul = $(this).attr('data-art');
			if (cart[articul]<kol){
			cart[articul]++;
			saveCartToLS();
			showCart();
		}
		else
			return false;
		}

		function minusGoods() {
			var articul = $(this).attr('data-art');
			if (cart[articul]>1) cart[articul]--;
			else delete cart[articul];
			saveCartToLS();
			showCart();
		}
			function deleteGoods() {
			var articul = $(this).attr('data-art');
		  delete cart[articul];
			saveCartToLS();
			showCart();
		}

});

function checkCart() {
	//проверяю наличие корзины в localstorage
	if (localStorage.getItem('cart') != null){
		cart = JSON.parse(localStorage.getItem('cart'));
	}
}

function saveCartToLS(){
	localStorage.setItem('cart', JSON.stringify(cart));
}

function sendEmail() {
		var ename = $('#ename').val();
		var email = $('#email').val();
		var ephone = $('#ephone').val();
		if (ename!='' && email!='' && ephone!=''){
				if ( $.isEmptyObject(cart) ) {
							alert("Корзина пуста!");
				}
				else {
						$.post (
								"core/mail.php",
								{
									"ename" : ename,
									"email" : email,
									"ephone" : ephone,
									"cart" : cart
								},
								function(data){
									console.log(data); 
								}
							);
						alert("ВСЕ хорошо");
				}
		}
		else {
			alert("Заполните поля!");
		}
}
$(document).ready(function () {
		$('.send-email').on('click', sendEmail);// отправка письма 
});