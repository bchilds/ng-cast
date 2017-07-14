angular.module('video-player')
.component('videoList', {
  
  templateUrl: 'src/templates/videoList.html',
  
  bindings: {
    videos: '<',
    onClick: '=',
  },
  
  controller: function($scope) {
    console.log('videoList level scope:', $scope);

  }, 
  
  
  
});
