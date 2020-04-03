import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles.css'

export default function Form() {
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)

  function generateLink(){
    return `https://saudadenaquarentena.netlify.com/?name=${name}`
  }

  return (
    <form>
      <label>nome</label>
      <div>
        <input
          name={name}
          placeholde="digite seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <CopyToClipboard text={generateLink()}
          onCopy={() => setCopied(true)}>
          <button>Copiar</button>
        </CopyToClipboard>
        {copied ? <span style={{color: 'red'}}>Copiado!</span> : null}
      </div>
    </form>
  )
}
