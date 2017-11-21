function init () {
	// вычитуем файл goods.json
	$.getJSON("goods.json", goodsOut);
}
function goodsOut(data){
	console.log(data);
}
init();