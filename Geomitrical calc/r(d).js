function rez()  {
var  a, b,  result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
result = Math.sqrt(a**2+b**2);
document.getElementById('textrez').innerHTML = ' Длина диагонали  прямоугольника :'+result+'см;';
}