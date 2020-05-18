function rez()  {
var  a, b, c, p,   result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
c = document.getElementById('c').value;
p = (+(a) + +(b) + +(c))/2; 
result = ((a*b*c)/(4*Math.sqrt(p*(p-a)*(p-b)*(p-c))));
document.getElementById('textrez').innerHTML = 'Радиус описанного круга:'+result+'см';
}