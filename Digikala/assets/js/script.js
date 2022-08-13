function main(){
    function progressBar(){
        let one;
        console.log($(window).height())
        let documentHeight = $(document).height() - $(window).height();
        let docScrollTop = $(document).scrollTop()
        let calculateBar= Math.floor((docScrollTop*100)/(documentHeight))
        $('.progressBar2').css({
            width: calculateBar+"%"
        })
    }
    $(window).scroll(progressBar)
}
$(document).ready(main)
