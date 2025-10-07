import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuSlide from '../MenuSlide/MenuSlide'
import stylesButton from '../pages/Students/CreateNewStudents/CreateNewStudent.module.css'
import { useNavigate } from 'react-router-dom';
import styles from './Layout.module.css'
import '../../App.jsx';

const Layout = () => {

  
  return (
    <div>
      <MenuSlide />
      <div className={styles.layout}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
