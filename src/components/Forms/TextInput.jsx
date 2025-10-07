import React from 'react'
import styles from './Input.module.css'

const TextInput = ({
  name,
  type,
  label,
  value,
  placeholder,
  required,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />

    </div>
  )
}

export default TextInput
