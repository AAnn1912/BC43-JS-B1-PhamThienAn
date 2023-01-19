// Bài 1: tính tiền lương nhân viên

/* 
-----INPUT-----
lấy ngẩu nhiên số ngày làm và lương 1 ngày 

-----PROCESS-----
B1:tạo biến cho lương 1 ngày, số ngày làm và tổng lương
B2:tính tổng lương bằng cách lấy lương 1 ngày * cho số ngày làm
B3:in kết qua ra bằng console.log

-----OUTPUT-----
cho ra kết quả tổng lương như yêu cầu đề bài
*/

var luong1ngay = 100000;
var soNgayLam = 27;
var tongLuong = 0;
tongLuong = luong1ngay * soNgayLam;
console.log("tổng lương thực lãnh là :", tongLuong);

// Bài 2: tính trung bình cộng 5 số thực

/*
-----INPUT-----
lấy ngẩu nhiên 5 số thực

-----PROCESS-----
B1: tạo biến cho 5 số thực được lấy ngẩu nhiên và trung bình cộng
B2: dùng công thức tổng 5 số / 5 để lấy kết quả trung bình cộng
B3: in kết quả bằng console.log

-----OUTPUT-----
Cho kết quả trung bình cộng 5 số theo như yêu cầu đề bài
*/

var soThuc1 = 33;
var soThuc2 = 3.14;
var soThuc3 = -5;
var soThuc4 = 14;
var soThuc5 = -8;
var trungBinhCong = 0;
trungBinhCong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
console.log("Trung bình cộng 5 số =", trungBinhCong);

// Bài 3:Tính quy đổi tiền USD => VND
/*
-----INPUT-----
nhập số tiền USD cần đổi

-----PROCESS-----
B1:tạo biến USD, tỉ lệ quy đổi, VND
B2:tính tổng quy đổi bằng cách USD * ti le quy doi 
B3:in kết quả ra bằng console.log

-----OUTPUT-----
cho tổng tiền quy đổi ra theo như yêu cầu đề bài
*/

var USD = 500;
var tiLe = 23.5;
var VND = 0;
VND = USD * tiLe;
console.log("tổng tiền quy đổi =", VND);

// Bài 4: Tính diện tích chu vi hình chữ nhật
/*
-----INPUT-----
chiều dài và chiều rộng của hình chử nhật là 1 số nguyên dương

-----PROCESS-----
B1:tạo biến cho chiều dài, chiều rộng, diện tích, chu vi
B2:tính chu vi bằng cách (chiều dài + chiều rộng)*2
B3:tính diện tích bằng cách (chiều dài * chiều rộng)
B4:in kết quả ra bằng console.log

-----OUTPUT-----
Có kết quả Diện tích và chu vi theo như yêu cầu của đề bài
*/

var chieuDai = 12;
var chieuRong = 8;
var dienTich = 0;
var chuVi = 0;
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;
console.log("Diện tích =", dienTich);
console.log("Chu Vi =", chuVi);

// Bài 5: tính tổng ký số
/* 
-----INPUT-----
Số nguyên dương n
có 2 ký số
(10,11,12,13..99)
+ 19 = 1+9=10
+ 99 = 9+9=18

-----PROCESS-----
B1:tạo biến số cho hàng chục, đơn vị, tổng ký số
B2:lấy số ngẩu nhiên 2 ký số lần lượt theo thứ tự chục, đơn vị
B3:lấy số hàng chục bằng cách lấy số đó chia 10 sau đó làm tròn bằng Math.floor
B4:lấy số đơn vị bằng cách lấy phần dư của số bằng '%'
B5:tổng 2 ký số lấy được cho ra kết quả như yêu cầu đề bài
B6: in kết quả ra bằng console.log


-----OUTPUT-----
Kết quả như biểu mẩu ta được tổng 2 ký số 

*/
var so = 19;
var chuc = Math.floor(so / 10);
var donVi = so % 10;
var tongKySo = 0;
tongKySo = chuc + donVi;
console.log("tổng ký số của 19 =", tongKySo);
