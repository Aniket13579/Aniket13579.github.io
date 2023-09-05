$('body').prepend('<div id="particles-js"></div>');
$('body').css('backgroundColor','#000');
$('body').append("<script src='./scripts/particles.js'></script> \
                <script src='./scripts/paticle-conf.js'></script>")
$('#particles-js').css({position:'fixed',zIndex :-1});