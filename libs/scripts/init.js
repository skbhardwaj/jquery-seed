/* globals MY_PROJECT */
// initialisation file for MY_PROJECT

// initialise components
(function($, util) {
    'use strict';

    $(function() {
        // initialise scrollTo utility before everything
        // else as it needs to listen to whether any
        // components change the scroll offset
        //util.scrollTo.init();

        // initialise components
        util.initialise(document);

        // Initialise resize function on page load
        util.resize.init();
    });
})(MY_PROJECT.$, MY_PROJECT.util);
