function tinh_so_ngay() {
    let thang = parseInt(document.getElementById('thang').value);

    let result;
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = 30;
            break;
        case 2:
            result = '28 hoặc 29';
            break;
        default:
            result = 'Không xác định'
    }
    document.getElementById('result').innerHTML = 'Tháng ' + thang + ' có ' + result + ' ngày';
}