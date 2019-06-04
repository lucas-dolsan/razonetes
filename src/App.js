import React, { Component } from 'react'

import Caixa from './classes/razonete'
import Pergunta from './classes/pergunta'
import './App.css';

const actionTypes = {
  DEBITO: 'resposta/debito',
  CREDITO: 'resposta/credito',
}

function _sum(array) {
  return array.reduce((accumulator, total) => accumulator + total, 0)
}

export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      debito: [10],
      credito: [50],
      indexPerguntaAtual: 1,
      perguntas: [
        {
          texto: "A empresa adquiriu um veículo no valor de R$ 20,000.00 ",
          valor: 200000,
          respostaCorreta: actionTypes.CREDITO,
        },
        {
          texto: "A empresa adquiriu um anão malabarista no valor de R$ 5,000.00 ",
          valor: 5000,
          respostaCorreta: actionTypes.CREDITO
        },
        {
          texto: "A empresa foi assaltada, os assaltantes esvaziaram o caixa que continha R$ 1,500.00 ",
          valor: 1500,
          respostaCorreta: actionTypes.DEBITO
        },
      ],
    }
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
    if (this.state.indexPerguntaAtual !== this.state.perguntas.length - 1) {
      this.setState(({ indexPerguntaAtual }) => {
        return { indexPerguntaAtual: indexPerguntaAtual + 1 }
      })
    } else {
      alert('acabaram as perguntas')
    }
  }

  retornarPergunta() {
    this.setState(prevState => {
      if (this.state.indexPerguntaAtual > 0) {
        return { indexPerguntaAtual: prevState.indexPerguntaAtual - 1 }
      } else {
        alert('não viaja, não da de voltar mais')
      }
    })
  }

  responder(valor) {

  }

  render() {
    const perguntaAtual = this.state.perguntas[this.state.indexPerguntaAtual]
    return (
      <div className="App">
        <header className="App-header">
          <Pergunta texto={perguntaAtual.texto} />
          <Caixa
            nome={'caixa'}
            debito={this.state.debito}
            credito={this.state.credito}
            onClickDebito={() => {
              this.debitar(perguntaAtual.valor)
              this.avancarPergunta()
            }}
            onClickCredito={() => {
              this.creditar(perguntaAtual.valor)
              this.avancarPergunta()
            }}
          />
        </header>
      </div>
    )
  }
}
