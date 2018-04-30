(function () {
    'use strict';
    // Declaração do Módulo Core para injetar Libs.
    angular
        .module('app.core',
            [
                'ngRoute',
                'ngAnimate',
                'ngMaterial',
                'ngMessages'
            ])
        .config(config);

    /** @ngInject */
    function config() {
    }
})();
