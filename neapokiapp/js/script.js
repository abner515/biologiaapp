var pokemon = angular.module("pokemon",[])

pokemon.controller("listadopokemon",function($http,$scope,$rootScope){


	$scope.listado = [];
	for (var i = 1; i < 100; i++) {
		$http({
		/*01000101 01110010 01101001 01100011 01101011*/
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
	}).then(function success(y){
		$scope.listado.push(y);
	})

	}

})

