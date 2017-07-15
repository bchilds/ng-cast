angular.module('video-player')
.component('videoList', {
  
  templateUrl: 'src/templates/videoList.html',
  
  bindings: {
    videos: '<',
    selectVideo: '=',
  },
  
  controller: function($scope) {
    //console.log('videoList level scope:', $scope);
    this.onClick = function(index) {
      //console.log('videos[index]: ', this.videos[index]);
      this.selectVideo(this.videos[index]);
    };
  }, 
  
  
  
});
