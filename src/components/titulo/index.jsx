
import React, { Component } from 'react';

class Titulo extends Component{

        render(){
            return(
                <div>
                    <h1>{this.props.texto}</h1>
                    <h4>{this.props.descricao || 'Descrição não informada'}</h4>
                </div>
            )
        }

}

export default Titulo;