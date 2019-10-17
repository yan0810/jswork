<<<<<<< HEAD
document.write("<p>金字塔<p>")
let level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Number(level)
if(isNaN(level)){
=======
document.write("<p>金字塔</p>")
let level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Number(level)
if (isNaN(level)){
>>>>>>> bda9b362c3238a6ef3f435315403bc385fde6c1e
    alert('金字塔的层数是数字')
}
for(let i=1;i<=level;++i){
    let blank = level - i;
    for(let k=0;k<blank;++k){
        document.write('&nbsp;');
    }
<<<<<<< HEAD
    let star =i * 2 - 1
    for(let j=0;j<star;++j){
        document.write('*')
    }
    document.write("<br>")

}
let str = '<table border="1">'
for(let i=1;i<10;++i){
    str +='<tr>' 
    for(var j=1;j<=i;++j){
        str +='<td>' + j + '*' + i +'='+( j * i) + '<td>'

}
str +='<tr>'
}
str +='</table>'
document.getElementById('table').innerHTML =str
=======
    //打印星星
    let star = i * 2 - 1
    for(let j=0;j<star;++j){
        document.write('*')
    }
    //换行
    document.write("<br>")
}

let str = '<table border="1">'
for(let i=1;i<10;++i){
    str += '<tr>'
    for(var j=1;j<=i;++j){
        //；拼接单元格
        str += '<td>' + j + '*' + i + '=' + ( j * i )
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table').innerHTML = str 
>>>>>>> bda9b362c3238a6ef3f435315403bc385fde6c1e
