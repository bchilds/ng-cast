angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  bindings: {
  },
  controller: function($scope, youTube) {
    //console.log('app level scope', $scope);
    this.videos = []; //window.exampleVideoData;
    this.currentVideo = {};
    this.selectVideo = function (video) {
      //console.log('select video\'s video: ', video);
      this.currentVideo = video;
    }.bind(this);
    
    this.searchResults = function(videos) {
      this.videos = videos;
      this.currentVideo = videos[0];
    }.bind(this);
    
    //runs search on app init
    this.$onInit = function() {
      youTube.search(undefined, this.searchResults);
    };
  }
});
