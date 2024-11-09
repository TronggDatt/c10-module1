function tinh_diem(){
    let vat_ly = parseFloat(document.getElementById('vat_ly').value);
    let hoa_hoc = parseFloat(document.getElementById('hoc_hoc').value);
    let sinh_hoc = parseFloat(document.getElementById('sinh_hoc').value);

    let tong_diem = vat_ly + hoa_hoc + sinh_hoc;
    let diem_trung_binh = tong_diem /3;

    document.getElementById('tong_diem').innerHTML = 'Tổng điểm: ' + tong_diem;
    document.getElementById('diem_trung_binh').innerHTML = 'Điểm trung bình: ' + diem_trung_binh;
}