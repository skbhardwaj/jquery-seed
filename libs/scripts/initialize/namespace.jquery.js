/* globals MY_PROJECT */
/**
 * @fileOverview clean up 3rd party lib namespaces that pollute the global scope
 * e.g. Remove jQuery from the global scope so that two vesions of jQuery can coexist
 */

(function($) {
    'use strict';
    // Namespace jQuery so it doesn't clash with other jquery versions
    MY_PROJECT.$ = $.noConflict(true);
})(window.jQuery);
