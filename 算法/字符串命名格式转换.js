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