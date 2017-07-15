angular.module('video-player')
.service('youTube', function($http) {
  
  this.search = (query, callback) => {
    var params = {
      //method: 'GET',
      //url: 'https://www.googleapis.com/youtube/v3/search',
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      
      q: query || 'SeaNanners',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true',
      
    };
    //TODO:
    // should accept query and callback
    // should get data from youtube with correct shape
    
    return $http.get('https://www.googleapis.com/youtube/v3/search', {params: params})
    .then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      
      callback(response.data.items);
      
      //console.log('response: ', response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('Failure to pull data');
    });
    
  };
  
});
