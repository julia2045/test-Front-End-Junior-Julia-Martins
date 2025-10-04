import React from 'react'
import { NavLink  } from "react-router-dom";
import Dashboards from  './assets/dashboard.svg?react'
import Students from  './assets/Students.svg?react'
import Teacher from  './assets/teachers.svg?react'
import Finance from  './assets/Finance.svg?react'
import User from  './assets/User.svg?react'

import styles from './MenuSlide.module.css'


const MenuSlide = () => {
  return (
    <div className={styles.menuSlide}>
        <div className={styles.buttonSlide}>
            <button>A</button>
            <h1> Akademi</h1>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink  to="/" className={styles.icon}> <Dashboards/> DashBoard</NavLink >
                </li>
                <li>
                    <NavLink  to="/Students" className={styles.icon}> <Students/> Students</NavLink >
                </li>
                <li>
                    <NavLink  to="/NewStudent" className={styles.icon}> <Students/>  Add Students</NavLink >
                </li>
                <li>
                    <NavLink  to="/"  className={styles.icon}> <Teacher/> Teachers</NavLink >
                </li>
                <li>
                    <NavLink  to="/"  className={styles.icon}> <Finance/> Finance</NavLink >
                </li>
                <li>
                    <NavLink  to="/" className={styles.icon}> <User/> user</NavLink >
                </li>
                
            </ul>
        </nav>
      
    </div>
  )
}

export default MenuSlide
