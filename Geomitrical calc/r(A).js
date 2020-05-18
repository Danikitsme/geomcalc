function rez()  {
var  a, b,  result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
result = Math.atan(b/a);
document.getElementById('textrez').innerHTML = ' Угол между диагоналями &alpha; :'+result+'°;';
}