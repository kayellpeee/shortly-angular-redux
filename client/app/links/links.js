angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getAllLinks()
      .then(function (links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getLinks();
})

.directive('shortenedLink', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/links/linksDirective.html'
  }
});
