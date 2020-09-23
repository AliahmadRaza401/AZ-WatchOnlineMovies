import React from 'react'
import p6 from "../images/p6.jpg";
import p3 from "../images/p3.jpg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";

const Slider = () =>{
 return(
  <div>
        <div id="carouselExampleIndicators" class="carousel slide w-100 m-auto" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={p2} class="d-block w-100" height="400px" alt="p1"/>
    </div>
    <div class="carousel-item">
      <img src={p3} class="d-block w-100"  height="400px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={p6} class="d-block w-100"  height="400px" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  </div>
 );
}

export default Slider;