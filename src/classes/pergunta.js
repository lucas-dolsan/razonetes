import { Component } from 'react'

export default class Pergunta extends Component {
  constructor(props) {
    super(props)
    this.texto = props.texto
    this.valor = props.valor
  }
}

