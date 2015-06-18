$(document).ready(function() {
    var promoId;

    promo = function() {
        clearTimeout(promoId);
        $('body').unbind('click').css('cursor', 'auto').css('width', '1280px').css('height', '800px');
        var wrap = $('.videoBG_wrapper');
        wrap.css('top', '100%');
        //to stage 2
        $('.videoBG').animate({
            top: '-100%'
        }, 1000, function() {
            $(this).remove();
            var h = wrap.find('body').html();
            $('body').html(h).css('position', 'static');
            stage2();         
        });
        wrap.animate({ top: 0 }, 1000);
    };

    // Promo
    $('body').videoBG({
        position:"fixed",
        zIndex:9999,
        mp4:'promo/promo.mp4',
        ogv:'promo/promo.mp4',
        webm:'promo/promo.mp4',
        opacity:1,
        fullscreen:false,
        width: 1280,
        height: 800,
        loop:false
    });
    $('.videoBG').css('left', 'auto');
    $('body').click(promo);

    promoId = setTimeout(promo, 12000);

stage2 = function() {
    // Menu
    var menu = $('.menu'),
        epage = $('.epage'),
        pre = $('.premii'),
        pro = $('.programs');

    $('.mainmenu').click(function() {
        menu.show().animate({ top: 0 }, 1000);
        epage.each(function(i, e) {
            if ($(e).css('display') === 'block')
                $(e).animate({ top: '100%' }, 1000, function() { $(this).hide() });
        });
        if (pre.css('display') === 'block')
            pre.animate({ top: '100%' }, 1000, function() { $(this).hide() });
        if (pro.css('display') === 'block')
            pro.animate({ top: '100%' }, 1000, function() { $(this).hide() });
    });

    openpage = function(id) {
        menu.animate({ top: '-100%' }, 1000, function() { $(this).hide() });

        if (id === 'EDGE-40135263') {
            $('.EDGE-28427582').css('top', '100%').show().animate({ top: 0 }, 1000, function() {

                AdobeEdge.loadComposition('pages/village3', 'EDGE-28427582', {
                    scaleToFit: "none",
                    centerStage: "none",
                    minW: "0",
                    maxW: "undefined",
                    width: "1280px",
                    height: "800px"
                }, {dom: [ ]}, {dom: [ ]});

                setTimeout(function() {
                    $('.EDGE-40135263').show().animate({ top: 0 }, 1000);
                    $('.EDGE-28427582').animate({ top: '-100%' }, 1000, function() { $(this).hide() });                    
                }, 14000);
            });            
        }
        else
            $('.' + id).show().animate({ top: 0 }, 1000);
    };

    $('.page1').click(function() {
        openpage('EDGE-41211846');
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
    });

    $('.page5').click(function() {
        openpage('EDGE-38852856');
    });

    $('.page6').click(function() {
        openpage('EDGE-10542059');
    });

    $('.page7').click(function() {
        openpage('EDGE-37199508');
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
    });

    $('.page9').click(function() {
        openpage('EDGE-10026752');
    });

    AdobeEdge.loadComposition('pages/animation', 'EDGE-41211846', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/bellarusian%20anim', 'EDGE-40135263', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/history', 'EDGE-34533036', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/mountain', 'EDGE-17207283', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/sea', 'EDGE-38852856', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/vyrasit%20sredstva%20animacii', 'EDGE-37199508', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/yroki', 'EDGE-38605189', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});

    AdobeEdge.loadComposition('pages/town2', 'EDGE-10026752', {
        scaleToFit: "none",
        centerStage: "none",
        minW: "0",
        maxW: "undefined",
        width: "1280px",
        height: "800px"
    }, {dom: [ ]}, {dom: [ ]});


    $('.menu6').click(function() {
        menu.animate({ top: '-100%' }, 1000, function() { $(this).hide() });
        pre.show().animate({ top: 0 }, 1000);
        $(".pseudotext").mCustomScrollbar(); // СКОЛЛ
    });
    $('.menu7').click(function() {
        menu.animate({ top: '-100%' }, 1000, function() { $(this).hide() });
        pro.show().animate({ top: 0 }, 1000);
        $(".pseudotext").mCustomScrollbar(); // СКОЛЛ
    });
};

});
