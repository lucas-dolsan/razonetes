import React, { PureComponent } from 'react'
import '../App.css';

export default class respostaForm extends PureComponent {

    renderAlternativa({ texto, opcao }) {
        return <h2 onClick={() => this.props.onClick(opcao)}>{texto}</h2>
    }

    render() {
        return (
            <div>
                <h1>Alternativas</h1>
                {this.props.alternativas.map(alternativa => this.renderAlternativa(alternativa))}
            </div>
        )
    }
}