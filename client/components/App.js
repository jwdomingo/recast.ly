class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: window.exampleVideoData,
      video: window.exampleVideoData[0]
    };
  }

  onVideoListEntryClick(videoObject){
    this.setState({
      video: videoObject
    });
  }

  render(){
    return (<div>
      <Nav/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
      </div>
      <div className="col-md-5">
        <VideoList playlist={this.state.playlist} video={this.state.video} listener={this.onVideoListEntryClick.bind(this)}/>

      </div>
    </div>);
  };
}

ReactDOM.render(<App />, document.getElementById("app"));