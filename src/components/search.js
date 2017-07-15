angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  
  controller: function ($scope, youTube) {

    this.result = function() {
      console.log('Search results: ');
    };
  
    // this.$onInit = function () {
    //   console.log(youTube.search(undefined, function() {}));
    // };
  }, //scope
  
});
