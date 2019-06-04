import React, { PureComponent } from 'react'

export default class Pergunta extends PureComponent {

  render() {
    return (
      <div>
        <h2> {this.props.texto} </h2>
      </div>
    )
  }
}

