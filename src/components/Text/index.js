import React, { Component } from 'react'

//import './styles.css'

export default class Text extends Component {
  state = {
    name: '',
  }

  gerarDias() {
    return Math.floor(Math.random() * 300 + 300)
  }

  async componentDidMount() {
    const { name = 'eu'} = this.props.match.params
    this.setState({ name })
  }

  render() {
    const { name } = this.state

    return (
      <>
        <h1>
          {this.gerarDias()} dias de quarentena e {name} não aguenta mais ficar em casa
        </h1>
        <p>
          Se voce eh como {name} e não aguenta mais ficar em casa compartilhe com
          seus amigos e mostre que está com saudades
        </p>
      </>
    )
  }
}
