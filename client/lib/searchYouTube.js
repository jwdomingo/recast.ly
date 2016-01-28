var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    success(data) => {
    },
    error(data) => {
      console.error('Something bad happened.');
    }
  });
};

window.searchYouTube = searchYouTube;
