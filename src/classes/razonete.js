import React, { Component } from 'react'

export default class Razonete extends Component {

  creditar(valor) {
    this.credito.push(valor)
  }

  debitar(valor) {
    this.debito.push(valor)
  }

  getTotalCredito() {
    return this._sum(this.credito)
  }

  getTotalDebito() {
    return this._sum(this.debito)
  }

  _sum(array) {
    return array.reduce((accumulator, total) => accumulator + total, 0)
  }

  _formatarParaReais(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  render() {
    return (
      <div>
        <h1>{this.props.nome}</h1>
        <table className="razonete-table">
          <thead>
            <tr>
              <th>Débito</th>
              <th>Crédito</th>
            </tr>
          </thead>
          <tbody>
            <td>
              {this.props.debito.map(valor => <tr>{this._formatarParaReais(valor)}</tr>)}
            </td>
            <td>
              {this.props.credito.map(valor => <tr>{this._formatarParaReais(valor)}</tr>)}
            </td>
          </tbody>
        </table>
      </div>
    )
  }

}