var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.jokes = [];
  var obj = {};

  // get a random joke so a joke is able to be displayed initially. Exclude explict jokes
  $.getJSON('https://api.icndb.com/jokes/random?exclude=[explicit]', function(data) {
    // using Lodash to unescape characters
    obj.joke = _.unescape(data.value.joke);
    $scope.jokes.push(obj);
    $scope.$apply();
  });

  // on click handler that gets a random joke when is clicked
  $('.btn-primary').on('click', function() {
    $scope.jokes = [];
    obj = {};

    // Exclude explict jokes
    $.getJSON('https://api.icndb.com/jokes/random?exclude=[explicit]', function(data) {
        // using Lodash to unescape characters
        obj.joke = _.unescape(data.value.joke);
        $scope.jokes.push(obj);
        $scope.$apply();
    });
  });

}]);
