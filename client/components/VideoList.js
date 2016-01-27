var VideoList = () => (
  <div className="video-list media">
    {window.exampleVideoData.map(video => 
        <VideoListEntry vdata={video}/>
    )}  
  </div>
);

window.VideoList = VideoList;