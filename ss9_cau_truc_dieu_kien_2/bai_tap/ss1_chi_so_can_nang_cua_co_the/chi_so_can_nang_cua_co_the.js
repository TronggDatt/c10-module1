function chi_so_can_nang_cua_co_the(){
    let can_nang = parseFloat(document.getElementById('can_nang').value);
    let chieu_cao = parseFloat(document.getElementById('chieu_cao').value);

    let bmi = can_nang /(chieu_cao*chieu_cao);
    let phan_loai;

    if (bmi < 18) {
        phan_loai = 'Underweight';
    }else if (bmi <25){
        phan_loai = 'Normal';
    }else if (bmi < 30){
        phan_loai = 'Overweight';
    }else {
        phan_loai = 'Obese';
    }

    document.getElementById('phan_loai').innerHTML = 'Kết quả ' +phan_loai;
}