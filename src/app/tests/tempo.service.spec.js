describe('Service: TempoService, unit tests', function () {
    var service;

    beforeEach(function () {
        module('app.projetoTempo.previsaoTempo');

        inject(function ($injector) {
            service = $injector.get('TempoService');
        });
    });

    it('is defined', inject(function (TempoService) {

        expect(TempoService).toBeDefined();

    }));

    it('Should have a getCidades function', function () {
        expect(angular.isFunction(TempoService.getCidades)).toBe(true);
    });

    it('Should have a getPrevisao function', function () {
        expect(angular.isFunction(TempoService.getPrevisao)).toBe(true);
    });

    it('returns a resource function', inject(function (TempoService) {
        var output = TempoService;
        expect(output.getCidades({}.$promise)).toBeDefined();
        expect(output.getPrevisao({}.$promise)).toBeDefined();
    }));
});