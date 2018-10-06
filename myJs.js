$(function(){
    window.addEventListener("scroll",function(e){
        var h = $(window).scrollTop(); 
        this.console.log(h);
        wH = $(window).height();
        x = 900 - wH;
        x2 = 2100 - wH;
        $("#p2").css("background-position-y", (-800 + h - x)*0.50);
        $("#p4").css("background-position-y", (-800 + h - x2)*0.50);
    });
});