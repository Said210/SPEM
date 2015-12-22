var go_to = function (a) {
  var body = $('html, body');
  var id = '#' + a;
  var top_var = $(id).offset();
  console.log($(id).offset(), top_var, typeof top_var);
  if (typeof top_var != 'undefined') {
    body.animate({
      scrollTop: top_var.top
    }, '500', 'swing', function () {
    });
  }
};

navigator.detect= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();


$(document).ready(function(){
  if(navigator.detect.indexOf("Firefox") != -1){
    $(".block").css("width", "24.7%");
    $(".half").css("width", "49.86%");
    $(".three_quaeter").css("width", "74.7%");
    $("select").css("padding","0px");
    $("select").css("border-radius","0px");
  }
});