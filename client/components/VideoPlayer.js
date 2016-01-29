class VideoPlayer extends React.Component {
  render(){

    return (<div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={
        !!this.props.video ? `https://www.youtube.com/embed/${this.props.video.id.videoId}?autoplay=1` : `http://4.bp.blogspot.com/-dGQzAh5mojE/TfUpQPXo2-I/AAAAAAAAAI8/586KSofMt84/s1600/Untitled-1+copy.jpg`
      } allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{
        !!this.props.video ? this.props.video.snippet.title : 'Video not found'
      }</h3>
      <div>{
        !!this.props.video ? this.props.video.snippet.description : ''
      }</div>
    </div>
  </div>);
  }
}

window.VideoPlayer = VideoPlayer;