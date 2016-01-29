var Nav = ({callback}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search callback={callback}/>
    </div>
  </nav>
);

window.Nav = Nav;