// Bài 1: tính tiền lương nhân viên
var luong1ngay = 100000;
var soNgayLam = 27;
var tongLuong =0;
tongLuong = luong1ngay * soNgayLam
console.log('tổng lương thực lãnh là :',tongLuong);

// Bài 2: tính trung bình cộng 5 số thực
var soThuc1 = 33;
var soThuc2 = 3.14;
var soThuc3 = -5;
var soThuc4 = 14;
var soThuc5 = -8;
var trungBinhCong = 0;
trungBinhCong = (soThuc1+soThuc2+soThuc3+soThuc4+soThuc5)/5;
console.log('Trung bình cộng 5 số =',trungBinhCong);

// Bài 3:Tính quy đổi tiền USD => VND
var USD = 500;
var tiLe = 23.500;
var VND = 0;
VND = USD * tiLe
console.log('tổng tiền quy đổi =',VND)

// Bài 4: Tính diện tích chu vi hình chữ nhật
var chieuDai = 12;
var chieuRong = 8;
var dienTich = 0;
var chuVi = 0;
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong)*2;
console.log('Diện tích =', dienTich)
console.log('Chu Vi =',chuVi)

// Bài 5: tính tổng ký số
var so = 19;
var chuc = Math.floor(so / 10);
var donVi = so % 10;
var tongKySo = 0;
tongKySo = chuc + donVi;
console.log('tổng ký số của 19 =', tongKySo);
