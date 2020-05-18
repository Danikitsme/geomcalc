function rez()  {
var  a, b,  result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
result = (a*b);
document.getElementById('textrez').innerHTML = ' Площадь прямоугольника :'+result+'см&sup2;';
}