import React from 'react'
import styles from '../Forms/Input.module.css'

const Input = ({name, type, label, value, onChange, error, onBlur, placeholder, maxlength}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} maxlength={maxlength} className={styles.input}/>
     {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  )
}

export default Input
