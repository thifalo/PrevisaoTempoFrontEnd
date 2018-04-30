(function () {
  'use strict';
// Declaração da controladora
  angular
    .module('app.projetoTempo.previsaoTempo')
    .controller('TempoController', TempoController)
  function TempoController(TempoService, $route, $timeout, $q, $scope) {
    //Referência entre controller e html
    var vm = this;

    //Declaração de Variáveis
    vm.nomeCidade = "";
    vm.uf = "";
    vm.dataConsulta = null;
    vm.listaPrevisao = [];
    vm.urlFormatada = null;

    // Declaração de Métodos
    vm.limpar = limpar;
    vm.pesquisarCodigo = pesquisarCodigo;

    // Declaração activate
    activate();

    function activate() {
      vm.validaGrid = false;
    }

    // Função para limpar os dados de pesquisa
    function limpar() {
      vm.selectedItem = null;
      vm.validaGrid = false;
      vm.urlFormatada = null;
    }

    // Função para pesquisar o código da cidade (Autocomplete)
    function pesquisarCodigo(cidade) {
      // Valida se a cidade não está vazia
      cidade = cidade + '';
      if (!cidade)
        return [];
      // Preenchimento Autocomplete para buscar lista de cidades
      if (cidade != vm.cidadeSearch) {
        vm.cidadeSearch = cidade;
        var defer = $q.defer();
        TempoService.getCidades(cidade).then(function (response) {
          return defer.resolve(response.data);
        })
          .catch(function (e) {
            return defer.reject([]);
          });

        return defer.promise;
      }
    }

    // Watch para assistir as alterações do campo cidade
    $scope.$watch('vm.selectedItem.Id', function () {
     // Valida se tem item selecionado no autocomplete
      if(!vm.selectedItem){
        vm.listaPrevisao = [];
        vm.validaGrid = false;
        return;
      }
      //Se selecionada cidade faz o get das previsões
      TempoService.getPrevisao(vm.selectedItem.Id).then(function (response) {
        //Preenche o objeto para grid
        vm.listaPrevisao = response.data.Previsao;
        //Apresenta Grid na tela
        vm.validaGrid = true;
        //Preenche as variáveis em cima da grid
        vm.nomeCidade = response.data.Nome;
        vm.uf = response.data.Uf;
        vm.dataConsulta = response.data.Atualizacao;
        // Preenchimento da URL de pesquisa somente para apresentar na tela
        vm.urlFormatada = "http://servicos.cptec.inpe.br/XML/cidade/7dias/" + vm.selectedItem.Id + "/previsao.xml";
      });
    });
  }
})();