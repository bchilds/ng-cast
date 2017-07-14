angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  bindings: {
      
  }, 
  
  controller: function($scope) {
    $scope.videos = window.exampleVideoData;
    $scope.cvid = window.exampleVideoData[0];
    console.log('app level scope', $scope);
    this.onClick = function() {
      console.log('app onClick', this);
    };
  }
  
  

});
