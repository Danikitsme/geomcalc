function rez()  {
var  a, b, c,  result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
c = document.getElementById('c').value;
result = +(a) + +(b) + +(c);
document.getElementById('textrez').innerHTML = 'Периметр треугольника:'+result+'см';
}