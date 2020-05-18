function rez()  {
var  a, result;
a = document.getElementById('a').value;
result = (a*(Math.sqrt(2)/2));
document.getElementById('textrez').innerHTML = ' Радиус описанного круга:'+result+'см';
}