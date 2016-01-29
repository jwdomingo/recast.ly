var VideoPlayer = ({video}) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={
        !!video ? `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1` : `http://4.bp.blogspot.com/-dGQzAh5mojE/TfUpQPXo2-I/AAAAAAAAAI8/586KSofMt84/s1600/Untitled-1+copy.jpg`
      } allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{
        !!video ? video.snippet.title : 'Video not found'
      }</h3>
      <div>{
        !!video ? video.snippet.description : ''
      }</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;