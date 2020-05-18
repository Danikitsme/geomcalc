function rez()  {
var  a, b, c, p,   result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
c = document.getElementById('c').value;
p = (+(a) + +(b) + +(c))/2; 
result = Math.sqrt(p*(p-a)*(p-b)*(p-c));
document.getElementById('textrez').innerHTML = 'Площадь треугольника:'+result+'см&sup2;';
}