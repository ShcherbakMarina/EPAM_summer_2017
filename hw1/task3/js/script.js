/*Школьная столовая хочет заказать новые треугольные подносы. Естественно, был организован тендер. Основным критерием отбора предложений является условие того, что имеющиеся в столовой круглые тарелки должны помещаться на новые подносы.
Директор школы дал вам задание написать программу, проверяющую, помещается ли тарелка данного размера на поднос с данными длинами сторон.
*/

var doc = document.getElementById('container');

var traySides = [3, 4, 5];
var plateR = 1;

var a = traySides[0];
var b = traySides[1];
var c = traySides[2];

var p = (a + b + c)/2;
var s = Math.sqrt(p*(p - a)*(p - b)*(p - c));

var idealR = s/p;

if (plateR <= idealR) {
	doc.innerHTML = 'Нам подходят эти подносы!';
} else {
	doc.innerHTML = 'Нам НЕ подходят эти подносы!';
}
