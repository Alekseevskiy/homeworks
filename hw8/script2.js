let a = prompt("Write str", "Hello, World");
let b = prompt("let symbol", "H")

function getSymbolIndex(str, symbol) {
    console.log (str.indexOf(symbol));
}

getSymbolIndex(a, b);