import React from 'react';
import ReactDOM from 'react-dom'


const Sidebar = (props) => {
 return (
  <div className="sidebar">
       <div className="sCards">
      <a href={props.link} target="_blank">
     <div className="scard">
      <img src= {props.img} alt="mypic" className="cardPic" height="100px"  width="50px"/>
      <div className="scardIfno">
       
       {/* <h3 className="cardTitle"> {props.Title} </h3>
       <a href={props.link} target="_blank">
       
        <button className="btn btn-danger"> Download<i class="fas fa-download"></i></button> 
       </a>*/}
      </div>
     </div>
     </a>
    </div>
  </div>
 );
}
export default Sidebar;