var a = document.getElementById('first-input');
var b = document.getElementById('second-input');
var btn = document.getElementById('button');
var screen = document.querySelector('.screen');
function addNumbers(x, y) {
    screen.innerHTML = (x + y).toString();
}
btn.addEventListener('click', function () { return addNumbers(parseInt(a.value), parseInt(b.value)); });
