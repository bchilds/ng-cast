angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    currentVideo: '=',
  },
  controller: function ($scope) {
    console.log('videoPlayer scope', $scope);
  },
  
});
