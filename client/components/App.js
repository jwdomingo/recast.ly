class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {done: true};
  }

  render(){
    return (<div>
      <Nav/>
      <div className="col-md-7">
        <VideoPlayer/>
      </div>
      <div className="col-md-5">
        <VideoList/>
      </div>
    </div>);
  };
}

ReactDOM.render(<App />, document.getElementById("app"));