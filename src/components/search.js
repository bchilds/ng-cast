angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  
  bindings: {
    searchClick: '=',
  },
  
  controller: function ($scope, youTube) {
    console.log('Search scope: ', $scope, this);
    this.result = function(results) {
      console.log('this.result: ', results);
      this.searchClick(results);
    }.bind(this);
    
    this.search = function() {
      youTube.search($scope.userSearch, this.result);
    };
  }, //scope
  
});
