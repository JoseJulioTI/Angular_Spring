var app = angular.module('loja', ["ngRoute"]);


/*app.controller('primeiroController', ['$scope', function($scope) {
    $scope.user = {nome : 'teste', sobreNome : 'teste2'};
    
    $scope.contador = 0;
    
    $scope.addContador = function () {
    	$scope.contador++;
    };

    $scope.pessoas = ['ana', 'mario', 'bruna'];
    	
}]);*/

/* config = configura as rotas ao qual o modulo irar ter 
   - when = adiciona uma nova rota.
   - otherwise = define uma rota caso nenhuma das rotas utilizadas pelo when forem acessadas. 
*/

app.config(function($routeProvider) {
    $routeProvider
    .when("/" , {
        controller: "listController",
        templateUrl: "list.html"
    }) 
    .when("/edit/:name", {
        controller: "editController",
        templateUrl: "form.html"
    })
    .when("/new", {
        controller: "newController",
        templateUrl: "form.html"
    })
    .otherwise({redirectTo: "/"});
});

// registro de trabalho que deve ser realizado quando o injetor é feito carregando todos os módulos
app.run(function($rootScope) {
    $rootScope.frutas = ['banana', 'melancia', 'pera'];
});

app.controller('listController',['$scope', function($scope) {

}]);

/*
  $scope é o escopo da aplicação html
  $location redirecionamento entre rotas
  $routeParams são os parametros repassados pela url 
 */
app.controller('editController', ['$scope', function($scope, $location, $routeParams) {
    $scope.title = 'Editar frutas'; // adicionando titulo a pagina
    $scope.fruta = $routeParams.name; // pegando o nome da fruta para editar
    $scope.frutaIndex = $scope.frutas.indexOf($scope.fruta); // pegando a fruta dentro da lista

    $scope.salvar = function() {
        $scope.frutas[$scope.frutaIndex] = $scope.fruta; // pega o novo nome da fruta editada
        $location.path('/'); // volta para o index
    };
}]);

app.controller('newController', ['$scope', function($scope, $location) {
    $scope.title = 'Nova Fruta';
    $scope.fruta = '';

    $scope.salvar = function() {
       $scope.frutas.push($scope.fruta); // add nova fruta.
       $location.path('/'); // volta para o index
    };
}]);