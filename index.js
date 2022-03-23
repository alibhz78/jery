$(document).ready(function(){
 $('.ul-1').hide();
$('.li-1').mousemove(function (e) { 
 $(this).find('.ul-1').show(200);   //$('.ul-1').show(100);
});
$('.li-1').mouseleave(function (e) {
    $(this).find('.ul-1').hide();

});
$('.li-amozesh').mousemove(function(){
    $(this).find('.i-for-amozesh').css({
        bottom:'50'
    })
})
$('.li-amozesh').mouseleave(function(){
    $(this).find('.i-for-amozesh').css({
        bottom:'-50'
    })
})
setInterval(function(){
    $('.h3-1').css({
        boxShadow: '0 0 10px #93399D'
    })

},500)
setInterval(function(){
    $('.h3-1').css({
        boxShadow: '0 0 10px white'
    })

},1000)

setInterval(function(){
    if($('.one2').next('a').length>0){   
     $('.one2').next().addClass('one2')
    $('.one2').first().removeClass('one2')
}

    else{
        $(".ul-takhfif2").find('a').first().addClass('one2')
        $(".ul-takhfif2").find('a').last().removeClass('one2')
    }


},2000)

setInterval(function(){
    if($('.sli').next('li').length>0){   
     $('.sli').next().addClass('sli')
    $('.sli').first().removeClass('sli')}

    else{
        $(".ul-takhfif").find('li').first().addClass('sli')
        $(".ul-takhfif").find('li').last().removeClass('sli')
    }


},2000)


})

