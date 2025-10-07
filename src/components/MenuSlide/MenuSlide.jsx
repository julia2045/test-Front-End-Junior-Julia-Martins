import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Dashboards from '../../assets/icon-menu-dashboard.svg?react'
import Students from '../../assets/icon-menu-students.svg?react'
import Teacher from '../../assets/icon-menu-teacher.svg?react'
import Finance from '../../assets/icon-menu-finance.svg?react'
import User from '../../assets/icon-menu-user.svg?react'
import UseMedia from '../Hooks/UseMedia'
import styles from '../../components/menuSlide/MenuSlide.module.css'

const MenuSlide = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const mobile = UseMedia('(max-width: 500px)')

  const menuItems = [
    { to: '/dashboard', label: 'Dashboard', Icon: Dashboards },
    { to: '/students', label: 'Students', Icon: Students },
    { to: '/create-new-student', label: 'Add Students', Icon: Students },
    { to: '/teacher', label: 'Teachers', Icon: Teacher },
    { to: '/finance', label: 'Finance', Icon: Finance },
    { to: '/user', label: 'User', Icon: User },
  ]

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.menuButton} ${
            menuMobile ? styles.menuButtonActive : ''
          }`}
          onClick={() => setMenuMobile(!menuMobile)}
        >
          <span>A</span>
        </button>
      )}

      <div
        className={`${styles.menuSlide} ${
          mobile ? (menuMobile ? styles.menuOpen : styles.menuClosed) : ''
        }`}
      >
        <div className={styles.buttonSlide}>
          <button>A</button>
          <h1>Akademi</h1>
        </div>

        <nav>
          <ul>
            {menuItems.map(({ to, label, Icon }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles.icon} ${isActive ? styles.active : ''}`
                  }
                  onClick={() => setMenuMobile(false)}
                >
                  <Icon className={styles.iconDimen} />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MenuSlide
