
function rectArea() {
    let num1 = parseInt(prompt("Diga a altura:"));
    let num2 = parseInt(prompt("Diga a largura:"));

    let area = num1 * num2;
    return area;
}

function circleArea() {
    let num1 = parseInt(prompt("Diga o raio:"));

    let area = num1 * num1 * Math.PI;
    return area;
}

let figura;

while ((figura = prompt("Escolha a figura geométrica:(C = circulo, T =triangulo, R = rectangulo, Q = sair)")) != "Q") {

    console.log(figura);
    if (figura == "C") {
        console.log(circleArea());
    } else if (figura == "T") {
        console.log(rectArea() / 2);
    } else if (figura == "R") {
        console.log(rectArea());
    }
}
