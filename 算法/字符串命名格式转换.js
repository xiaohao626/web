var str = 'font-size';

function cssStyle2DomStyle(sName) {
    var nameArr = sName.split('-');
    for (var i=0,len=nameArr.length;i<len;i++) {
        var name = nameArr[i];
        if (name) {
            var head = name.substring(0, 1);
            var body = name.substring(1);
            nameArr[i] = (i === 0 ? head : head.toUpperCase()) + body;
        }
    }
    
    return nameArr.join('');
}

console.log(cssStyle2DomStyle(str));

// 正则方式
function cssStyle2DomStyleByReg(sName) {
    const reg = /\w{1}(-\w{1})/g;
    return sName.replace(reg, function(match, p1) {
        return p1.split('-')[1].toUpperCase();
    })
}

console.log(cssStyle2DomStyleByReg(str));
