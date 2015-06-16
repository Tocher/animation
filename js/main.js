$(document).ready(function() {
    var promoId;

    promo = function() {
        clearTimeout(promoId);
        $('body').unbind('click');
        $('body').css('cursor', 'auto');
        //to stage 2
        $('.videoBG').fadeOut('400', function() {
            $(this).remove();
            var h = $('.videoBG_wrapper').find('body').html();
            $('body').html(h).css('position', 'static');
            stage2();         
        });
    };

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
    $('body').click(promo);

    promoId = setTimeout(promo, 12000);

stage2 = function() {
    // Menu
    var menu = $('.menu'),
        epage = $('.epage'),
        pre = $('.premii'),
        pro = $('.programs');

    $('.mainmenu').click(function() {
        menu.show();
        epage.hide();
        pre.hide();
        pro.hide();
    });

    openpage = function(id) {
        menu.hide();
        $('.' + id).show();
    };

    $('.page1').click(function() {
        openpage('EDGE-41211846');
        AdobeEdge.loadComposition('pages/animation', 'EDGE-41211846', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
        $(".text").mCustomScrollbar(); // СКОЛЛ
        var h = $(".page1history"),
            a = $(".page1artists");

        $(".toHistory").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.show();
            a.hide();
        });
        $(".toArtists").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.show();
        });
    });

    $('.page2').click(function() {
        openpage('EDGE-40135263');
        AdobeEdge.loadComposition('pages/bellarusian%20anim', 'EDGE-40135263', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
        $(".text").mCustomScrollbar(); // СКОЛЛ
        var h = $(".page2history"),
            a = $(".page2artists"),
            s = $(".page2studios");

        $(".toHistory").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.show();
            a.hide();
            s.hide();
        });
        $(".toArtists").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.show();
            s.hide();
        });
        $(".toStudios").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.hide();
            s.show();
        });
    });

    $('.page3').click(function() {
        openpage('EDGE-34533036');
        AdobeEdge.loadComposition('pages/history', 'EDGE-34533036', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
        $(".text").mCustomScrollbar(); // СКОЛЛ
        var h = $(".page3history"),
            a = $(".page3artists"),
            s = $(".page3studios"),
            u = $(".page3union");

        $(".toHistory").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.show();
            a.hide();
            s.hide();
            u.hide();
        });
        $(".toArtists").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.show();
            s.hide();
            u.hide();
        });
        $(".toStudios").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.hide();
            s.show();
            u.hide();
        });
        $(".toUnion").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.hide();
            s.hide();
            u.show();
        });
    });

    $('.page4').click(function() {
        openpage('EDGE-17207283');
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
        openpage('EDGE-38852856');
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
        openpage('EDGE-10542059');
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
        openpage('EDGE-37199508');
        AdobeEdge.loadComposition('pages/vyrasit%20sredstva%20animacii', 'EDGE-37199508', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
        $(".text").mCustomScrollbar(); // СКОЛЛ
        var h = $(".page7history"),
            a = $(".page7artists");

        $(".toHistory").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.show();
            a.hide();
        });
        $(".toArtists").click(function() {
            $(this).parent().find('.button').removeClass('active');
            $(this).addClass('active');
            h.hide();
            a.show();
        });
    });

    $('.page8').click(function() {
        openpage('EDGE-38605189');
        AdobeEdge.loadComposition('pages/yroki', 'EDGE-38605189', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.page9').click(function() {
        openpage('EDGE-10026752');
        AdobeEdge.loadComposition('pages/town2', 'EDGE-10026752', {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "1280px",
            height: "800px"
        }, {dom: [ ]}, {dom: [ ]});
    });

    $('.menu6').click(function() {
        menu.hide();
        pre.show();
        $(".pseudotext").mCustomScrollbar(); // СКОЛЛ
    });
    $('.menu7').click(function() {
        menu.hide();
        pro.show();
        $(".pseudotext").mCustomScrollbar(); // СКОЛЛ
    });
};

});