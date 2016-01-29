var VideoListEntry = ({video, videoEntry, listener}) => {
    var vSource = videoEntry.snippet.thumbnails.default.url;
    var vTitle = videoEntry.snippet.title;
    var vDesc = videoEntry.snippet.description;

    var style = {
      backgroundColor: video === videoEntry ? 'pink' : 'white'
    };

  return (
    <div className="video-list-entry" style={style}>
      <div className="media-left media-middle">
        <img className="media-object" src={vSource} alt="" onClick={() => listener(videoEntry)} />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => listener(videoEntry)} >{vTitle}</div>
        <div className="video-list-entry-detail">{vDesc}</div>
      </div>
    </div>);
};

window.VideoListEntry = VideoListEntry;

