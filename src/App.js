import React, { Component } from 'react'

import Caixa from './classes/razonete'
import './App.css';


export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      debito: [10],
      credito: [],
    }
  }

  componentDidMount() {

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
