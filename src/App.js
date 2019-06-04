import React, { Component } from 'react'

import Caixa from './classes/razonete'
import Pergunta from './classes/pergunta'
import './App.css';


export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      debito: [10],
      credito: [50],
      indexPerguntaAtual: 0,
      perguntas: [
        { texto: "A empresa adquiriu um veículo no valor de R$ 20,000.00 ", valor: 200000 },
        { texto: "A empresa adquiriu um anão malabarista no valor de R$ 5,000.00 ", valor: 200000 },
        { texto: "A empresa foi assaltada, os assaltantes esvaziaram o caixa que continha R$ 1,500.00 ", valor: 200000 },
      ],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.avancarPergunta()
      console.log(this.state.indexPerguntaAtual)
    }, 500);
  }

  debitar(valor) {
    this.setState(prevState => {
      return { debito: [...prevState.debito, valor] }
    })
  }

  creditar(valor) {
    this.setState(prevState => {
      return { credito: [...prevState.credito, valor] }
    })
  }

  avancarPergunta() {
    this.setState(prevState => {
      return { indexPerguntaAtual: prevState.indexPerguntaAtual++ }
    })
  }

  retornarPergunta() {
    this.setState(prevState => {
      return { indexPerguntaAtual: prevState.indexPerguntaAtual-- }
    })
  }

  render() {
    const { indexPerguntaAtual, perguntas } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <Pergunta texto={perguntas[indexPerguntaAtual].texto} />
          <Caixa
            nome={'caixa'}
            debito={this.state.debito}
            credito={this.state.credito}
          />
        </header>
      </div>
    )
  }
}
