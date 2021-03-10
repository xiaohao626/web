function namespace(oNamespace, sPackage) {
    var sPackages = sPackage.split('.');
    function changeToObj(obj) {
        return typeof obj === 'object' ? obj : {};
    }
    oNamespace = changeToObj(oNamespace);
    _oNamespace = oNamespace;
    for (var i=0,len=sPackages.length;i<len;i++) {
        _oNamespace[sPackages[i]] = changeToObj(_oNamespace[sPackages[i]]);
        _oNamespace = _oNamespace[sPackages[i]];
    }

    return oNamespace;
}


var _obj = namespace({a: {test: 1, b: 2}}, 'a.b.c.d');
console.log('_obj:', _obj);