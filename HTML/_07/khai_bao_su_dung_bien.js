//Bài tập số 1
let i = 10
let j = 20.5
let b = true
let s = "Hà Nội"
document.write('i=' + i + "<br>")
document.write('j=' + j + "<br>")
document.write('b=' + b + "<br>")
document.write('s=' + s + "<br>")
//Bài tập số 2
let width = 20
let height = 10
let area = width*height
document.write('Diện tích hình chữ nhật là ' + area + "<br>")
//Bài tập số 3
let so1 = prompt()
let so2 = prompt()
let kq = so1 % so2
if (kq == 0)
{
    document.write(so1 + ' là bội số của ' + so2)
}
else
{
    document.write(so1 + ' không là bội số của ' + so2)
}
