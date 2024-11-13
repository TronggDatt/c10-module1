function tinh_chu_vi(){
    let r = parseFloat(document.getElementById("radius").value);
    let chu_vi= Math.PI *r*2;

    document.getElementById("chu_vi").innerHTML ="Chu vi hình tròn là: " + chu_vi;
}