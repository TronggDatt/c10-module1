function set(a) {
    document.getElementById("view").value += a;
}

function result() {
    var Exp = document.getElementById("view");
    var result = eval(Exp.value);
    Exp.value = result;
}

function del() {
    var elem = document.getElementById("view").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);
    document.getElementById("view").value = a;
}