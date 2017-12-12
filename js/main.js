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
setInterval(function(){plusSlides(1)}, 5000);

$(document).ready(function() {
loadGoods();
	checkCart();
	showMiniCart();
	
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready
	
	function a() {
		$("#mini-cart").css("display", "none");
	}

function loadGoods(){
	//загружаю товары на страницу
	$.getJSON('goods.json', function(data) {
		//console.log(data);
		var out ='';
		for (var key in data){
			out+='<div class = "card">';
			out+='<a name="'+data[key]['iak']+'"></a>';
			out+='<h3>'+data[key]['name']+'</h3>';
			out+='<p class="price">Цена: '+data[key]['cost']+'</p>';
			out+='<img src="'+data[key].img+'" class="imgtovar'+key+'">';
			out+='<h3 class="description">'+data[key]['description']+'</h3>';	
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
 		$("#mini-cart").css("display", "block");
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
 		out +='<button onClick="a()" class="ix">×</button>';
 		out +='<br>';
 		for (var w in cart){
 			if (w == "0001") {
 			out += 'Ружье Stoeger P350 Camo' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0002") {
 			out += 'Карабин Antonio Zoli' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0003") {
 			out += 'Карабин ТОЗ ' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0004") {
 			out += 'Патрон 9,3х64 БПЗ SP лак' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0005") {
 			out += 'Патрон 12х70 Federal пуля' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0006") {
 			out += 'Патрон 308Win БПЗ SP 11,7г' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0007") {
 			out += 'Костюм ХСН Горка камыш' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0008") {
 			out += 'Костюм Sundridge Igloo' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0009") {
 			out += 'Костюм Хольстер Шегги' + ' ---' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0010") {
 			out += 'Спиннинг Shimano Clarus' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0011") {
 			out += 'Спиннинг Salmo TAIFUN SPIN' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0012") {
 			out += 'Спиннинг Major Craft' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0013") {
 			out += 'Катушка Okuma Beater' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0014") {
 			out += 'Катушка Okuma Carbonite' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0015") {
 			out += 'Катушка Okuma Begin II' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0016") {
 			out += 'БОТИНКИ SEELAND GRIZZLY' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0017") {
 			out += 'БОТИНКИ HARKILA TRAPPER' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0018") {
 			out += 'БОТИНКИ HARKILA PRO HUNTER' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0019") {
 			out += 'ПАЛАТКА TREK PLANET' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0020") {
 			out += 'ПАЛАТКА PROLOGIC C.O.M.' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0021") {
 			out += 'ПАЛАТКА TREK PLANET HUDSON' + ' ---' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0022") {
 			out += 'ЛОДКА МАСТЕР ЛОДОК RUSH 260' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0023") {
 			out += 'ЛОДКА FLINC FT290L' + ' --- ' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}
 			if (w == "0024") {
 			out += 'ЛОДКА HDX НАДУВНАЯ CLASSIC' + ' ---' + cart[w]+'шт.'+'<br>';
 			out += '<br>';
 		}

 		}

 		out+='<br><a href="cart.html">Корзина</a>';
 		$('#mini-cart').html(out);

 	}
