import React from 'react'
import styles from './InfoMessage.module.css'
import GlobalButtons from '../GlobalButtons/GlobalButtons'

const InfoMessage = () => {
  return (
    <div className={styles.message}>
      <h1>
        Nenhum conteúdo disponível no momento. Adicione um estudante ou veja a lista existente.
      </h1>
      <GlobalButtons/>
    </div>
  )
}

export default InfoMessage
