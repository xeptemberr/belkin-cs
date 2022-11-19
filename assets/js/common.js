function layerToggle(layerName) {
    var elms = document.getElementsByClassName(layerName);
    Array
        .from(elms)
        .forEach((x) => {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        })
}

$(document).ready(function(){
    var mobileMenu = $('.global-navigation-m');
    mobileMenu.on('click', function(){
        if ($('.global-navigation').css('display') == 'none') {
            $('.global-navigation').show();
        } else {
            $('.global-navigation').hide();
        }
    })
})