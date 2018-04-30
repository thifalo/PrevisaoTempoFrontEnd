(function () {
    'use strict';
    // Declaração do Módulo do Projeto Previsão Tempo
    angular
        .module('app.projetoTempo.previsaoTempo', [])
        .config(config);

    /** @ngInject */
    function config($routeProvider, $httpProvider, $locationProvider) {
        // Location provider para Remover caracter '#' da url
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');

        // Definição das rotas para o projeto Previsão Tempo
        // State
        $routeProvider
            .when('/tempo', {
                templateUrl: '../app/ProjetoTempo/PrevisaoTempo/templates/tempo.html',
                controller: 'TempoController as vm'
            })
            .when('/', {
                templateUrl: '../app/ProjetoTempo/PrevisaoTempo/templates/tempo.html',
                controller: 'TempoController as vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();