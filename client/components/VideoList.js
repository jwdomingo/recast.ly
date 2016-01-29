var VideoList = ({video, playlist, listener}) => (
  <div className="video-list media">
    {playlist.map((videoEntry, key) => 
      <VideoListEntry video={video} videoEntry={videoEntry} listener={listener} key={key}/>
    )}
  </div>
);

window.VideoList = VideoList;