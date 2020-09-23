import React,{useState} from 'react';
import Card from './Card';
import MyGame from './SlotGame'; 
import CardData from './Components/CardData' ;
import "./App.css";
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Pagination from './Components/Pagination';
import Getdata from './Components/Getdata';
import SideData from './Components/SidebarData';

function App() {
  const [filter, setFilter] = useState("");
  const onchange = (e) =>{
     let result = e.target.value;
     setFilter(result);
  }

  function cardarry (val)
{
  if(filter.length !== 0)
  {
    if(val.cTitle.toLowerCase().startsWith(filter.toLowerCase()))
    {
      return (
       <Card  
       Title={val.cTitle}
       img={val.cimg}
       link={val.clink}
       />
      );
    }
    else {
      return null;
    }
  }
  else{
   return (
     <Card  
     Title={val.cTitle}
     img={val.cimg}
     link={val.clink}
     />
    );
  }
}


  
  return (
    <div className="app">
      <Navbar 
        filter={filter}
        onchange={onchange}
        />
      <Slider />
      
      <div className ="main">
      <div className="container">
         <h2 className="toptitle">NEW RELEASE MOVIE DOWNLOAD</h2> 
         {CardData.map(cardarry)}
         
      </div>
      </div>
    </div>
  );
}

export default App;