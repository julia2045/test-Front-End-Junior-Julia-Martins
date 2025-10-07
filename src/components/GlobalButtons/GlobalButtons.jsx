import React from 'react'
import { useNavigate } from 'react-router-dom'
import stylesButtons from './GlobalButtons.module.css'

const GlobalButtons = () => {
  const navigate =  useNavigate()
  
  return (
    <div className={stylesButtons.btnsPosition}>
              <button
                className={stylesButtons.btnOutline}
                onClick={() => navigate('/students')}
              >
                <span>Students</span>
              </button>
              <button
                className={stylesButtons.btnPrimary}
                onClick={() => navigate('/create-new-student')}
              >
                <span>New Students</span>
              </button>
            </div>
  )
}

export default GlobalButtons
