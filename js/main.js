$(document).ready(function() {

    // Promo
    $('body').videoBG({
        position:"fixed",
        zIndex:9999,
        mp4:'promo/promo.mp4',
        ogv:'promo/promo.mp4',
        webm:'promo/promo.mp4',
        opacity:1,
        fullscreen:true,
        loop:false
    });

    setTimeout(function() {
        //to stage 2
        $('.videoBG').fadeOut('400', function() {
            $(this).remove();
            var h = $('.videoBG_wrapper').find('body').html();
            $('body').html(h).css('position', 'static');
            stage2();         
        });
    }, 12000);

stage2 = function() {
    // Menu
    var menu = $('.menu');
    $('.page1').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/animation', 'EDGE-41211846', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page2').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/bellarusian%20anim', 'EDGE-40135263', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page3').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/history', 'EDGE-34533036', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page4').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/mountain', 'EDGE-17207283', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page5').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/sea', 'EDGE-38852856', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page6').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/village2', 'EDGE-10542059', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page7').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/vyrasit%20sredstva%20animacii', 'EDGE-37199508', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page8').click(function() {
        menu.hide();
        AdobeEdge.loadComposition('pages/yroki', 'EDGE-38605189', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });
};

});