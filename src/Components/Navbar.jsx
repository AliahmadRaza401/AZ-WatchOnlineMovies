import React from 'react'

const Navbar = (props) =>{
 return(
  <div>
    <nav class="navbar navbar-light bg-info">
  <a class="navbar-brand ml-2"><i class="fas fa-video"></i> AZ WatchOnlineMovies</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search Your Movie here.." aria-label="Search"
      value={props.filter}
      onChange={props.onchange}
    ></input>
    <span><i class="fas fa-search"></i></span>
  </form>
</nav>
  </div>
 );
}

export default Navbar;