import React from 'react'
import stylesButton from './NewStudent.module.css'
import { Link } from 'react-router-dom'
import styles from './Students.module.css'


const Students = () => {
  return (
    <section className={styles.students}>
      <h1>Students</h1>
      <div className={stylesButton.buttonsForm}>
          <select id="newest" name="newest">
            <option value="">Newest</option>
            <option value="br">OldWest</option>
          </select>
        <button className={stylesButton.submit}><Link to="/NewStudent">+ New Student</Link></button>
      </div>
    </section>
  )
}

export default Students
