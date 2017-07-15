angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  bindings: {
  },
  controller: function($scope) {
    console.log('app level scope', $scope);
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.onClick = function() {
      console.log('app onClick', $scope);
    }.bind(this);
    this.selectVideo = function () {
      console.log('onClick context: ', video);
      this.currentVideo = video;
    };
    
    this.searchResults = function () {
      
    };
    
  }
});
