class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: [],
      video: ''
    };
  }

  onVideoListEntryClick(videoObject){
    this.setState({
      video: videoObject
    });
  }

  onSearch(playlistArray){
    this.setState({
      playlist: playlistArray
    });
  }

  componentWillMount(){
    var options = {
      query: 'epic wins',
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    console.log("rendered!");
    searchYouTube(options, (pList) => this.onSearch(pList));    
  }

  render(){
    return <div>
      <Nav callback={(playlist) => this.onSearch(playlist)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
      </div>
      <div className="col-md-5">
        <VideoList playlist={this.state.playlist} video={this.state.video} listener={(vid) => this.onVideoListEntryClick(vid)}/>

      </div>
    </div>
  };
}

ReactDOM.render(<App />, document.getElementById("app"));