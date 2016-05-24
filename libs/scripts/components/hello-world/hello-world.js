(function($, util) {
    /**
     * Hello world component
     * @namespace helloWorld
     * @memberof MY_PROJECT.comp
     */
    MY_PROJECT.comp.helloWorld = (function() {

        /**
         * Initialise & returns new storelocator component.
         * @memberOf MY_PROJECT.comp.storelocator
         */
        function init(el) {
            console.log('Hello World', el);
            $.subscribe(util.resize.getEventName(), function() {
                console.log('window resized !!', util.matchmedia);
            });
        }

        return {
            init: init
        };

    })();

})(MY_PROJECT.$, MY_PROJECT.util);
