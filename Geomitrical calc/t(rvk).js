function rez()  {
var  a, b, c, p,   result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
c = document.getElementById('c').value;
p = (+(a) + +(b) + +(c))/2; 
result = Math.sqrt(((p-a)*(p-b)*(p-c))/p);
document.getElementById('textrez').innerHTML = 'Радиус вписанного круга:'+result+'см';
}