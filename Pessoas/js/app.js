(function() {
    //var app = angular.mo
    var app = angular.module('appModulo', []);

    app.controller('appController', function($scope) {

        $scope.tituloAplicacao = "Salarios dos personagens";

        $scope.pessoas = [
            { Nome: "Tio Patinhas Duck", Sexo: "M", Salario: 9982133.32},
            { Nome: "Zezinho Duck", Sexo: "M", Salario: 933.32},
            { Nome: "Leitao Porco", Sexo: "M", Salario: 3873.83 },
            { Nome: "Luizinho Duck", Sexo: "M", Salario: 928.65},
            { Nome: "Urso Puff", Sexo: "M", Salario: 4929.54 },
            { Nome: "Patricia Duck", Sexo: "F", Salario: 928.38 },
            { Nome: "Huguinho Duck", Sexo: "M", Salario: 927.37 },
            { Nome: "Abel Rabitt", Sexo: "M", Salario: 9127.37 },
            { Nome: "Margarida Duck", Sexo: "F", Salario: 6831.72 },
            { Nome: "Risonho Horse", Sexo: "F", Salario: 7321.13 },
            { Nome: "Madame Patilda Duck", Sexo: "F", Salario: 1549.87 },
            { Nome: "Tigrão Tigre", Sexo: "M", Salario: 8892.52 },
            { Nome: "Capitao Boing Duck", Sexo: "M", Salario: 12342.52 },
            { Nome: "Corujao Bird", Sexo: "M", Salario: 3842.98 },
            { Nome: "Professor Pardal Duck", Sexo: "M", Salario: 5746.96 }
        ];

        $scope.ordenar = function(campo) {
            $scope.campoOrdenacao = campo;
        }

    });

})();
