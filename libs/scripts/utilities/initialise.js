/*global MY_PROJECT*/
/**
 * @fileOverview Provides a utility function to initialise any component by calling the
 * components' returned init function.
 */
(function(MY_PROJECT, $, util) {
    'use strict';

    /**
     * Initialise DOM Element
     * @memberof MY_PROJECT.util
     */
    util.initialise = function(element) {
        // get all components
        var $element = $(element),
            $components = $element.find('.MY_PROJECT-component[data-component-name]');

        $.each($components, function(index, item) {
            var $item = $(item),
                name = $item.data('component-name');

            util.attempt(name + '.init', MY_PROJECT.comp)(item, document, $);
        });
    };

})(MY_PROJECT, MY_PROJECT.$, MY_PROJECT.util);
