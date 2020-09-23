import React from 'react'
import ReactDOM from 'react-dom'
import './Card.css';


const Slot = (props) => {
 let x = props.x;
 let y = props.y;
 let z = props.z;

  if( (x===y) && (y===z) ){
   return (
    <div>
     <h1> {x} {y} {z} </h1>
     <h2>You Win</h2> 
     <hr />
    </div>
   );
  } 
  else {
    return(
      <div>
     <h1> {x} {y} {z} </h1>
     <h2>Not Match</h2> 
     <hr />
    </div>
    );
  } 
}


const MyGame = () => {
 return(
   
  <div className="gamePlay">
   <h1 className="welcome">WellCome To Slot Game</h1>
   
   <Slot x = '@' y='@' z='@' />
   <Slot x = '!' y='@' z='@' />
   <Slot x = '*' y='*' z='*' />


  </div>

 );
};
export default MyGame;