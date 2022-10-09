function getQueryStringParam(param) {
  var url = window.location.toString();
  url.match(/\?(.+)$/);
  var params = RegExp.$1;
  params = params.split("&");
  var queryStringList = {};
  for(var i = 0; i < params.length; i++) {
    var tmp = params[i].split("=");
    queryStringList[tmp[0]] = unescape(tmp[1]);
  }
  return queryStringList[param];
}



if (getQueryStringParam("live")) {
  var cmMmc = getQueryStringParam("live");
  document.getElementById("param-value").innerHTML = " " + cmMmc + " ";
} else {
  document.getElementById("param-value").innerHTML = "" + window.location.search; ;
}
