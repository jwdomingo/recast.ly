var searchYouTube = (options, callback) => {
  return $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&key=${window.YOUTUBE_API_KEY}`,
    type: 'GET',
    contentType: 'application/json',
    success (data) {
      if(data.items || data.items.length){
        callback(data.items);
      }
    },
    error (data) {
      console.error('Something bad happened.');
    }
  });
};

window.searchYouTube = searchYouTube;
