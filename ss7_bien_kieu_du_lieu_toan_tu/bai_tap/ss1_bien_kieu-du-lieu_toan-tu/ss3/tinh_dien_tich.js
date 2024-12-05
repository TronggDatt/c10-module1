function tinh_dien_tich() {
    let r = parseFloat(document.getElementById("radius").value);
    let dien_tich = Math.PI * r * r;

    document.getElementById("dien_tich").innerHTML = "Diện tích hình tròn là: " + dien_tich;
}