function add(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    document.getElementById('result').innerText = 'Result: ' + (a + b);
}

function sub(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    document.getElementById('result').innerText = 'Result: ' + (a - b);
}

function mul(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    document.getElementById('result').innerText = 'Result: ' + (a * b);
}

function div(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    document.getElementById('result').innerText = 'Result: ' + (a / b);
}