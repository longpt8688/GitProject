//Bài tập 1
let dVatly = prompt('Nhập điểm môn Vật Lý: ')
let dHoahoc = prompt('Nhập điểm môn Hoá Học: ')
let dSinhHoc = prompt('Nhập điểm môn Sinh Học: ')
let diemVatly = parseInt(dVatly)
let diemHoahoc = parseInt(dHoahoc)
let diemSinhhoc = parseInt(dSinhHoc)
let sum = diemVatly + diemSinhhoc + diemHoahoc
let avg = sum / 3
document.write('Tong Diem 3 mon = '+ sum + "<br>")
document.write('Trung binh diem 3 mon = ' + avg + "<br>")
//Bài tập 2
let doC = prompt('Nhập nhiệt độ bằng độ C = ')
let C = parseInt(doC)
let F = C/5*9 + 32
document.write('Do F = ' + F)
//Bài tập 3DienTich
let bankinh = prompt('Nhập bán kính hình tròn = ')
let r = parseInt(bankinh)
let Chuvi = 2 * r * Math.PI
let DienTich = r * r * Math.PI
document.write('Chu Vi = ' + Chuvi.toFixed(2) + 'Dien Tich = ' + DienTich.toFixed(2))