class Search extends React.Component{

  render(){
    return <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(event) => {
        var options = {
          query: event.target.value,
          max: 5,
          key: window.YOUTUBE_API_KEY
        };
        searchYouTube = _.throttle(searchYouTube, 400);
        searchYouTube(options,this.props.callback)}
        }
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  }
}


window.Search = Search;

