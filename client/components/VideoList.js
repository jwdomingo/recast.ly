class VideoList extends React.Component {

  render(){
    return (<div className="video-list media">
    {this.props.playlist.map(videoEntry => 
    <VideoListEntry video={this.props.video} videoEntry={videoEntry} listener={this.props.listener}/>
    )}
    </div>);
  }
}

window.VideoList = VideoList;