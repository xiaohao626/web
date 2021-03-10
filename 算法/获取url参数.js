// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key

var exampleUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';

function getUrlParam(sUrl, sKey) {
  var paramUrl = sUrl.split('#')[0].split('?')[1];
  var params = paramUrl.split('&');
  var paramsEnum = {};
  for (var i=0,len=params.length;i < len; i++) {
    var keyValue = params[i].split('=');
    var key = keyValue[0];
    var value = keyValue[1];
    if (paramsEnum[key]) {
      if (Array.isArray(paramsEnum[key])) {
        paramsEnum[key].push(value);
      } else {
        paramsEnum[key] = [].concat(paramsEnum[key], value)
      }
    } else {
      paramsEnum[key] = value;
    }
  }

  if (sKey) {
    return paramsEnum[sKey] || '';
  }

  return paramsEnum;
}

var _url = getUrlParam(exampleUrl);
console.log('_url:', _url)

