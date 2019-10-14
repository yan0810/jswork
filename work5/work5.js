str = '<table border="1">'
        for(let i=9;i>0;--i){
            str +='<tr>'
            for(let i=9;i>0;--i){
                str += '<tb>&nbsp;</tb>'
            }
            str +='</tr>'
        }
        str +='</table>'
        document.activeElementID('table1').innerHTML = str


        str = '<table border="1">'
        for(let i=9;i>0;--i){
            str +='<tr>'
            for(var j=i;j>0;--j){
                str += '<tb>&nbsp;</tb>'
            }
            str +='</tr>'
}
str += '</table>'
document.getElementByID('table2').innerHTML = str
str = '<table border="1>'
for (let i=9;i>0;--i){
    str +='</tr>'
    for(var j=i;j>0;--j){
        str += '<tb>' + j + '*' +i + '=' + (j*i) + '</td>';
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML = str

