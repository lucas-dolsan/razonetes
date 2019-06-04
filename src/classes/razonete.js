import React, { Component } from 'react'
import '../App.css';


export default class Razonete extends Component {

  _formatarParaReais(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  render() {
    return (
      <div>
        <h1>{this.props.nome}</h1>
        <table className={"razonete-table "}>
          <thead>
            <tr>
              <th>Débito</th>
              <th>Crédito</th>
            </tr>
          </thead>
          <tbody>
            <td onClick={this.props.onClickDebito}>
              {this.props.debito.map(valor => <tr>{this._formatarParaReais(valor)}</tr>)}
            </td>
            <td onClick={this.props.onClickCredito}>
              {this.props.credito.map(valor => <tr>{this._formatarParaReais(valor)}</tr>)}
            </td>
          </tbody>
        </table>
      </div >
    )
  }

}