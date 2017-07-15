angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '=',
  },
  controller: function ($scope) {
    $scope.getIframeSource = function(videoId) {
      return 'https://www.youtube.com/embed/' + videoId;
    };
    //console.log('videoPlayer scope', $scope);
  },
  
});
