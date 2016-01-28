class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log('HELLOOOO', this.props.anything)
    return (<div className="video-list media">
    {window.exampleVideoData.map(video => 
    <VideoListEntry vdata={video}/>
    )}  
    </div>);
  }
}

window.VideoList = VideoList;