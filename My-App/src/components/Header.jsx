import React from 'react';
import '../style/headerStyle.css'; // Importa el archivo CSS

const Header = ({ title }) => {
  return (
    <header id="titulo">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
