import React,{Component} from 'react'
import prueba from '../../img/img1.png'

class Slide extends Component{

  state={
    slides:this.props.data,
    index:0,
    slideActual:[],
  }

componentWillMount(){
console.log(this.props[0].titulo);
}
  componentDidMount(){


  }

  render(){
    const divStyle = {
        color: 'blue',
    }
    return(
      <div className="Contenedor-slide">

      <div className="Contenedor-titulo">
      <h2 className={this.props.entradaTitulo}>{this.props[0].titulo}</h2>
      </div>
      <div>
      <img className={this.props.entradaImagen} src={this.props[0].img}></img>
      </div>

      <div className="Description-container">
      <div className="Cont-Subtitle">
      <p className={this.props.entradaSubtitulo}>{this.props[0].subtitulo}</p>
      <div className={this.props.entradaLine}></div>
      </div>
      <p className={this.props.entradaDescription}>{this.props[0].description}</p>
      </div>

</div>
    )
  }


}

export default Slide;
