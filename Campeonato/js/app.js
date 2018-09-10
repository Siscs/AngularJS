(function() {
    //var app = angular.mo
    var app = angular.module('appModulo', []);

    app.controller('appController', function($scope) {

        $scope.tituloAplicacao = "Campeonato";
        $scope.dataCotacao = new Date();
        $scope.valorCotacao = 5823.92;
        $scope.numeroLinhas = 15;
        $scope.campoOrdenacao = 'Nome';
        $scope.tipoFiltro = 'Nome';
        $scope.textoFiltro = '';

        $scope.times = [
            { Nome: 'Brasil', Pontos: 10, Bandeira: 'brasil.jpg' },
            { Nome: 'Espanha', Pontos: 9, Bandeira: 'espanha.jpg' },
            { Nome: 'Holanda', Pontos: 8, Bandeira: 'holanda.jpg' },
            { Nome: 'Belgica', Pontos: 7, Bandeira: 'belgica.jpg' },
            { Nome: 'Inglaterra', Pontos: 6, Bandeira: 'Inglaterra.jpg' },
            { Nome: 'Mexico ', Pontos: 5, Bandeira: 'Mexico.jpg' },
            { Nome: 'Russia', Pontos: 4, Bandeira: 'Russia.jpg' },
            { Nome: 'Noruega', Pontos: 4, Bandeira: 'Noruega.jpg' },
            { Nome: 'Suécia', Pontos: 3, Bandeira: 'Suécia.jpg' },
            { Nome: 'Dinamarca', Pontos: 2, Bandeira: 'Dinamarca.jpg' },
            { Nome: 'Australia', Pontos: 3, Bandeira: 'Australia.jpg' },
            { Nome: 'Estados Unidos', Pontos: 1, Bandeira: 'EstadosUnidos.jpg' }
        ];

        $scope.incluirTime = function(time) {
            $scope.times.push(time);
            delete $scope.time;
        }

        $scope.ordenar = function(campo) {
            $scope.campoOrdenacao = campo;
        }

    });

})();
