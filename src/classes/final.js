import React, { PureComponent } from 'react'

export default class Final extends PureComponent {

    render() {
        return (
            <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
                <h1>Pontuação final:  {this.props.totalPontos}</h1>
                <h2>🏆✌💪💥🔥🏅</h2>
            </div>
        )
    }
}

