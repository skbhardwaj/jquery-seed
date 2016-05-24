/*global MY_PROJECT*/

MY_PROJECT.util.matchmedia = (function(settings) {
    'use strict';

    var MEDIA_NARROW = '(max-width: 767px)',
        MEDIA_TABLET = '(max-width: 959px)',
        MEDIA_WIDE = '(min-width: 960px)';

    // forceWide is true in browsers that we are
    // not providing narrow styling to
    if (settings.forceWide) {
        return {
            narrow: {
                matches: true,
                media: MEDIA_NARROW,
                addListener: function() {},
                removeListener: function() {}
            },
            tablet: {
                matches: true,
                media: MEDIA_TABLET,
                addListener: function() {},
                removeListener: function() {}
            },
            wide: {
                matches: true,
                media: MEDIA_WIDE,
                addListener: function() {},
                removeListener: function() {}
            }
        };
    } else {
        return {
            narrow: window.matchMedia(MEDIA_NARROW),
            tablet: window.matchMedia(MEDIA_TABLET),
            wide: window.matchMedia(MEDIA_WIDE)
        };
    }
})(MY_PROJECT.settings || {});
