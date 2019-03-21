import React, {Component} from 'react';
import Slide from './slide.js'
import ArrowUp from '../../img/arrow-up.png'
import ArrowDown from '../../img/arrow-down.png'

class SlidesController extends Component{
state={
  objeto:[],
  index:0,
  cantidadTotal:9,
  entradaTitulo:"Entrada-titulos Titulo",
  entradaSubtitulo:"Entrada-titulos Subtitulo",
  entradaImagen:"Picture Entrada-imagen",
  entradaDescription:"Descripcion Entrada-description",
  entradaLine:"line-slider Entrada-line"
}
  componentWillMount(){
    this.setState({
      objeto:[this.props.data[this.state.index]]
    })
  }

nextSlide=()=>{
  if(this.state.index<this.state.cantidadTotal){
    this.setState({
    entradaTitulo:"Titulo Salida-titulos",
    entradaSubtitulo:"Subtitulo Salida-titulos",
    entradaImagen:"Picture Salida-imagen",
    entradaDescription:"Descripcion Salida-description",
    entradaLine:"line-slider Salida-line",
     index:this.state.index+1
 }, () => {
     setTimeout(() =>{
       this.setState({
         objeto:[this.props.data[this.state.index]],
          entradaTitulo:"Entrada-titulos Titulo",
          entradaSubtitulo:"Entrada-titulos Subtitulo",
          entradaImagen:"Picture Entrada-imagen",
          entradaDescription:"Descripcion Entrada-description",
          entradaLine:"line-slider Entrada-line"
       })
     },900);
 });
  }
}

prevSlide=()=>{
  if(this.state.index>0){
    this.setState({
      entradaTitulo:"Titulo Salida-titulos",
      entradaSubtitulo:"Subtitulo Salida-titulos",
      entradaImagen:"Picture Salida-imagen",
      entradaDescription:"Descripcion Salida-description",
      entradaLine:"line-slider Salida-line",
      index:this.state.index-1
  }, () => {
    setTimeout(() =>{
      this.setState({
        objeto:[this.props.data[this.state.index]],
         entradaTitulo:"Entrada-titulos Titulo",
         entradaSubtitulo:"Entrada-titulos Subtitulo",
         entradaImagen:"Picture Entrada-imagen",
         entradaDescription:"Descripcion Entrada-description",
         entradaLine:"line-slider Entrada-line",
      })
    },900);
  });
  }
}

  render(){
    return(
      <div class="Cont-Slide-Historia">

      <Slide entradaLine={this.state.entradaLine} entradaDescription={this.state.entradaDescription} entradaImagen={this.state.entradaImagen} entradaTitulo={this.state.entradaTitulo} entradaSubtitulo={this.state.entradaSubtitulo}  {...this.state.objeto}></Slide>
      <div className="Contenedor-botones">

      <div onClick={this.prevSlide} className="Boton-historia">
      <p className="arrow-title">Atrás</p>
      <img className="arrow-img" src={ArrowUp}></img>
      </div>

      <div onClick={this.nextSlide} className="Boton-historia">
      <img className="arrow-img" src={ArrowDown}></img>
      <p className="arrow-title">Adelante</p>
      </div>

      </div>
      </div>
    )
  }
}

export default SlidesController;
