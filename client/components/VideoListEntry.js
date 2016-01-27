// var VideoListEntry = () => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src="//i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">Video Title</div>
//       <div className="video-list-entry-detail">Video Description</div>
//     </div>
//   </div>
// );

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var vData = this.props.vdata;
    var vSource = vData.snippet.thumbnails.default.url;
    var vTitle = vData.snippet.title;
    var vDesc = vData.snippet.description;

    return (<div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={vSource} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{vTitle}</div>
      <div className="video-list-entry-detail">{vDesc}</div>
    </div>
  </div>);
  }
}

window.VideoListEntry = VideoListEntry;

