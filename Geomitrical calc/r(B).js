function rez()  {
var  a, b,  result;
a = document.getElementById('a').value;
b = document.getElementById('b').value;
result = Math.atan(a/b);
document.getElementById('textrez').innerHTML = ' Угол между диагоналями &beta; :'+result+'°;';
}