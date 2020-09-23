import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Cards">
      <a href={props.link} target="_blank">
     <div className="card">
      <img src= {props.img} alt="mypic" className="cardPic" height="250px" />
      <div className="cardIfno">
       {/* <h3 className="cardTitle"> {props.Title} </h3>
       <a href={props.link} target="_blank">
       
        <button className="btn btn-danger"> Download<i class="fas fa-download"></i></button> 
       </a>*/}
      </div>
     </div>
     </a>
    </div>
  );
}

export default Card;
