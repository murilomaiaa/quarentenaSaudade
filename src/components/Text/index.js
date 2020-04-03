import React, { Component } from 'react'
import queryString from 'query-string'

//import './styles.css'

export default class Text extends Component {
  state = {
    name: '',
  }

  gerarDias() {
    return Math.floor(Math.random() * 300 + 300)
  }

  async componentDidMount() {
    const { name = ''} = queryString.parse(this.props.location.search)
    const { nome = ''} = queryString.parse(this.props.location.search)
    
    if (name === nome && name === '')
      this.setState({ name: 'eu' })
    if (name !== '')
      this.setState({ name })
    if (nome !== '')
      this.setState({ name: nome })
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
