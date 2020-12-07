var color = 'blue';
function changeColor() {
    if(color ==="blue"){
        color = 'red';
    }else{
        color = 'blue'
    }
}
changeColor();
console.log('color is now '+color);

var colos = 'blue'
function changeC() {
    var anotherColor = "red";
    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = colos;
        colos = tempColor;
    }
    swapColors();
}
changeC();
console.log(colos)
