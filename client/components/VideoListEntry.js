class VideoListEntry extends React.Component {
  render() {
    var vData = this.props.videoEntry;
    var vSource = vData.snippet.thumbnails.default.url;
    var vTitle = vData.snippet.title;
    var vDesc = vData.snippet.description;

    var style = {
      backgroundColor: this.props.video === this.props.videoEntry ? 'yellow' : 'white'
    };

    return (<div className="video-list-entry" style={style}>
    <div className="media-left media-middle">
      <img className="media-object" src={vSource} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={this.props.listener.bind(this, vData)} >{vTitle}</div>
      <div className="video-list-entry-detail">{vDesc}</div>
    </div>
  </div>);
  }
}

window.VideoListEntry = VideoListEntry;

