/*global MY_PROJECT */

MY_PROJECT.util.resize = (function($, window, undefined) {
    'use strict';
    var resizeEvent = 'resize.MY_PROJECT-resize orientationchange.MY_PROJECT-resize',
        MY_PROJECTResizeEvent = 'MY_PROJECT:win:resize',
        delayTimer = 250,
        timer,
        wWidth = $(window).width(),
        wHeight = $(window).height(),

    onResizeEvent = function() {
        if (timer !== undefined) {
            window.clearTimeout(timer);
        }

        timer = window.setTimeout(function() {
            //adding this checkas on some mobiles when scrolling it things that we resized screen
            if ($(window).width() !== wWidth || $(window).height() !== wHeight) {
                wWidth = $(window).width();
                wHeight = $(window).height();
                $.publish(MY_PROJECTResizeEvent);
            }
        }, delayTimer);
    };

    function init() {
        $(window).on(resizeEvent, onResizeEvent);
    }

    function getEventName() {
        return MY_PROJECTResizeEvent;
    }

    return {
        init : init,
        getEventName: getEventName
    };

})(MY_PROJECT.$, window);
