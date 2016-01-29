class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: window.exampleVideoData,
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
    console.log("state", this.state);
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