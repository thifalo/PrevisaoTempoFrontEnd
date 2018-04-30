(function () {
    'use strict';
    angular.module('main', []);
    /**
     * Principal Módulo dos Projetos
     */
    angular
        .module('main', [
            // Core
            'app.core',
            // Projeto Previsão Tempo
            'app.projetoTempo',
            // Demais Projetos
            // ...
        ]);
})();