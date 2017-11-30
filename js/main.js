var cart = {}; // моя корзина

var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	 slides[slideIndex-1].style.display = "block";
	 dots[slideIndex-1].className+= " active";
}


$ ('document').ready(function(){
	loadGoods();
	checkCart();
	showMiniCart();

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
			out+='<button class="add-to-cart" data-art="'+key+'">В корзину</button>';
			out+='</div>';
		}
		$('#goods').html(out);
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
