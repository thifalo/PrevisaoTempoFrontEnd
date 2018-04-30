(function () {
    'use strict';
    // Declaração do Módulo para Inclusão de demais projetos relacionados ao Previsão Tempo
    angular
        .module('app.projetoTempo', [
            'app.projetoTempo.previsaoTempo'
        ])
        .config(config);

    /** @ngInject */
    function config() {
    }
})();