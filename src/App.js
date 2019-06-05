import React, { Component } from 'react'
import './App.css';

import Pergunta from './classes/pergunta'
import RespostaForm from './classes/respostaForm';


const alternativaTypes = {
  A: 'resposta/A',
  B: 'resposta/B',
  C: 'resposta/C',
  D: 'resposta/D',
}

export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      pontos: 0,
      indexPerguntaAtual: 0,
      perguntas: [
        {
          id: 1,
          texto: "A empresa adquiriu um veículo no valor de R$ 20,000.00 ",
          alternativas: [
            { texto: 'A - imposto é roubo', opcao: alternativaTypes.A },
            { texto: 'B - imposto é roubo', opcao: alternativaTypes.B },
            { texto: 'C - imposto é roubo', opcao: alternativaTypes.C },
            { texto: 'D - imposto é roubo', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.A,
          pontos: 10
        },
        {
          id: 2,
          texto: "A empresa adquiriu um anão malabarista no valor de R$ 5,000.00 ",
          alternativas: [
            { texto: 'A - imposto é roubo', opcao: alternativaTypes.A },
            { texto: 'B - imposto é roubo', opcao: alternativaTypes.B },
            { texto: 'C - imposto é roubo', opcao: alternativaTypes.C },
            { texto: 'D - imposto é roubo', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.C,
          pontos: 15
        },
        {
          id: 3,
          texto: "A empresa foi assaltada, os assaltantes esvaziaram o caixa que continha R$ 1,500.00 ",
          alternativas: [
            { texto: 'A - imposto é roubo', opcao: alternativaTypes.A },
            { texto: 'B - imposto é roubo', opcao: alternativaTypes.B },
            { texto: 'C - imposto é roubo', opcao: alternativaTypes.C },
            { texto: 'D - imposto é roubo', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 20
        },
        {
          id: 4,
          texto: "A empresa adquiriu um veículo no valor de R$ 20,000.00 ",
          alternativas: [
            { texto: 'A - imposto é roubo', opcao: alternativaTypes.A },
            { texto: 'B - imposto é roubo', opcao: alternativaTypes.B },
            { texto: 'C - imposto é roubo', opcao: alternativaTypes.C },
            { texto: 'D - imposto é roubo', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.A,
          pontos: 10
        },
        {
          id: 5,
          texto: "A empresa adquiriu um anão malabarista no valor de R$ 5,000.00 ",
          alternativas: [
            { texto: 'A - imposto é roubo', opcao: alternativaTypes.A },
            { texto: 'B - imposto é roubo', opcao: alternativaTypes.B },
            { texto: 'C - imposto é roubo', opcao: alternativaTypes.C },
            { texto: 'D - imposto é roubo', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.C,
          pontos: 15
        },
        {
          id: 6,
          texto: "A empresa foi assaltada, os assaltantes esvaziaram o caixa que continha R$ 1,500.00 ",
          alternativas: [
            { texto: 'A - imposto é roubo', opcao: alternativaTypes.A },
            { texto: 'B - imposto é roubo', opcao: alternativaTypes.B },
            { texto: 'C - imposto é roubo', opcao: alternativaTypes.C },
            { texto: 'D - imposto é roubo', opcao: alternativaTypes.D },
          ],
          alternativaCorreta: alternativaTypes.D,
          pontos: 20
        },
      ],
    }
  }


  pontuar(valor) {
    this.setState(prevState => {
      return { pontos: prevState.pontos + valor }
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

  responder(perguntaAtual, alternativa) {
    if (perguntaAtual.alternativaCorreta === alternativa) {
      this.pontuar(perguntaAtual.pontos)
      alert('acertou')
    } else {
      alert('errou')
    }
    this.avancarPergunta()
  }

  render() {
    const perguntaAtual = this.state.perguntas[this.state.indexPerguntaAtual]
    return (
      <div className="App">
        <header className="App-header">
          <Pergunta texto={perguntaAtual.texto} />
          <RespostaForm
            alternativas={perguntaAtual.alternativas}
            onClick={alternativa => this.responder(perguntaAtual, alternativa)}
          />
          <h3>Pontuação: {this.state.pontos}</h3>
        </header>
      </div>
    )
  }
}
