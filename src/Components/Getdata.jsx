import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Getdata = () => {
  const [data, setData] = useState ([]);

  const loadData = async() => {
    const result = await Axios.get('https://api.themoviedb.org/3/movie/550?api_key=25fb05d6ce91d8836251cdee3053a943');
    console.log(result.data);
  }
  useEffect( () => {
    loadData();
  }, []);
  

 return(
    <div>
      <h1>Halloooo APi</h1>
    </div>
 );
};

export default Getdata;
