class Nav extends React.Component {
  render(){
    return <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search callback={this.props.callback}/>
    </div>
  </nav>
  }
}

window.Nav = Nav;
