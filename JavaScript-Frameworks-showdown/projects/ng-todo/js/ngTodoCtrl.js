ngTodo.controller('NgTodoCtrl', function ngTodoCtrl($scope) {
	$scope.todos = [
		{ val: "A new cool thing", completed: false },
		{ val: "A new cool thing", completed: false },
		{ val: "A new cool thing", completed: true },
		{ val: "A new cool thing", completed: false },
		{ val: "A new cool thing", completed: true }
	];

  $scope.addNewTask = function() {
    $scope.todos.unshift({ completed: false, val: $scope.newTask });
    $scope.newTask = '';
  };

  $scope.clearCompleted = function() {
  	$scope.todos = $scope.todos.filter(function(el) {
  		return !el.completed;
  	});
  };

  $scope.removeTodo = function(index) {
  	$scope.todos.splice(index, 1);
  }
});