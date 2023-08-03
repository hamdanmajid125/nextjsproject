
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
        jQuery('#header-wrapper').addClass("sticky");
    } else {
        jQuery('#header-wrapper').removeClass("sticky");
    }
});

document.querySelectorAll('.packagesNav .nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        var image = this.getAttribute('data-image');
        if (image !== '') {
            var packagesXtra = document.querySelector('.packages');
            packagesXtra.style.backgroundImage = 'url(' + image + ')';
        }
    });
});

jQuery('.slider-revoluation').mousemove(function (e) {
    var wx = jQuery(window).width();
    var wy = jQuery(window).height();
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var newx = x - wx / 2;
    var newy = y - wy / 2;
    jQuery('.one, .two, .three, .four, .five, .six, .seven, .eight').each(function () {
        var speed = jQuery(this).attr('data-speed');
        if (jQuery(this).attr('data-revert')) speed *= -1;
        TweenMax.to(jQuery(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
    });
});

// section-1-img js end