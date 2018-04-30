(function () {
    'use strict';
    // Declaração do serviço
    angular
        .module('app.projetoTempo.previsaoTempo')
        .factory('TempoService', TempoService)

    function TempoService($http) {
        // Retorno das funções para o escopo da controladora
        return {
            getCidades: getCidades,
            getPrevisao: getPrevisao
        };

        // Chamada para Back-End, obter lista cidades
        function getCidades(cidade) {
            return $http({
                method: 'GET',
                url: 'http://localhost:3002/api/previsaotempo?cidade=' + cidade
            });
        }
        // Chamada para Back-End, obter lista previsões
        function getPrevisao(codigoCidade){
            return $http({
                method: 'GET',
                url: 'http://localhost:3002/api/previsaotempo?codigoCidade=' + codigoCidade
            });
        }
    }
})();