function rez()  {
var  a, b,  result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
result = (2*a+2*b);
document.getElementById('textrez').innerHTML = ' Периметр  прямоугольника :'+result+'см;';
}