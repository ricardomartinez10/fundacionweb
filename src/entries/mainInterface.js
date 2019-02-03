import React, {Component} from 'react';
import SlidesController from '../pages/slide/slidesController.js'
import InfoSlides from '../pages/slide/slides.json'
import '../pages/slide/slide.css';
import Triangle from '../img/triangulo.png'

 class Interfaz extends Component{
   render(){
     return(
       <div className="Contenedor-principal">
          <div className="Cont-traignle">
          <img className="img-tringle" src={Triangle}></img>
          </div>
       	<SlidesController data={InfoSlides.slides}></SlidesController>
       </div>
     )
   }
 }

export default Interfaz;
