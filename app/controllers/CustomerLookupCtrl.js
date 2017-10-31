app.controller('CustomerLookupCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.AfterSelectedCustomer = 

	$http({
		method: 'GET',
		url: '/cutomers/'+ $scope.first_name
	})
    

}]);