class VideoList extends React.Component {

  render(){
    return (<div className="video-list media">
    {this.props.playlist.map((videoEntry, key) => 
    <VideoListEntry video={this.props.video} videoEntry={videoEntry} listener={this.props.listener} key={key}/>
    )}
    </div>);
  }
}

window.VideoList = VideoList;