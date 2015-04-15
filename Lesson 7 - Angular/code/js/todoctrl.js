angular.module('myapp', []).controller('TodoCtrl', function ($scope) {
	$scope.elements = [];
	$scope.inputValue = '';

	$scope.addNew = function () {
		if (!$scope.inputValue) {
			return;
		}
		$scope.elements.push({
			value: $scope.inputValue,
			status: true
		});
		$scope.inputValue = '';
	};

	$scope.remove = function (elem) {
		var index = $scope.elements.indexOf(elem);
		if (index > -1) {
			$scope.elements.splice(index, 1);
		}
	};
});


