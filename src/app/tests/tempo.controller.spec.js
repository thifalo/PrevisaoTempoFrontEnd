describe('TempoController', function () {
    var $rootScope,
        $scope,
        controller;
    beforeEach(function () {
        module('app.projetoTempo.previsaoTempo');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('TempoController', { $scope: $scope });
        });
    });

    // Verify our controller exists
    it('should be defined and call services getCidades', inject(function (_$controller_) {
        expect(TempoController).toBeDefined();
        expect(TempoService.getCidades).toHaveBeenCalled();
    }));

    // Verify our controller exists
    it('should be defined and call services getPrevisao', function () {
        expect(TempoController).toBeDefined();
        expect(TempoService.getPrevisao).toHaveBeenCalled();
    });

    // Verify that the controller can resolve a returned promise
    it('should resolve returned promise if successful', function () {

        var response;
        TempoService.promise.then(function (data) {
            response = data;
        });
        TempoService.resolve('Returned OK!');
        scope.$apply();
        expect(response).toBe('Returned OK!');
    });
});