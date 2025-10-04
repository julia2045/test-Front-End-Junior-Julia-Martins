import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuSlide from './MenuSlide';
import './App.css';

const Layout = () => {
  return (
    <div>
      {/* Sidebar fixa */}
      <MenuSlide />

      {/* Conteúdo principal */}
      <div
        style={{
          marginLeft: '345px',   // mesmo valor da largura da sidebar
          padding: '40px',       // espaço interno confortável
          minHeight: '100vh',    // garante que o conteúdo ocupe a altura da tela
          backgroundColor: '#F3F4FF', // mesma cor de fundo do conteúdo
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
