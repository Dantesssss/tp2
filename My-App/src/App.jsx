import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import Redes from './components/Redes';
import Login from './components/Login';
import Register from './components/Register';
import gatitosImage from './assets/image/Gatitos.jpg';
import fondo1Image from './assets/image/Fondo_1.jpeg';
import fondo2Image from './assets/image/Fondo2.jpeg';
import Bitcoin from './assets/image/bitcoin.jpg';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está autenticado

  const blogTitle = 'Blog de Chanchito Feliz';
  const articles = [
    { title: 'Bitcoin', description: 'Nueva moneda digital', image: Bitcoin, texto: 'Bitcoin es una moneda digital descentralizada y un sistema de pago sin banco central o administrador único. La criptomoneda fue concebida en 2008 por una persona o grupo de personas bajo el seudónimo de Satoshi Nakamoto, cuya identidad concreta se desconoce.' },
    { title: 'Tres lindos Gatitos', description: 'Gatitos Jugando', image: gatitosImage, texto: 'Texto' },
    { title: 'Título de mi post 2', description: 'Descripción de mi post 2', image: fondo1Image, texto: 'Texto' },
    { title: 'Título de mi post 3', description: 'Descripción de mi post 3', image: fondo2Image, texto: 'Texto' }
  ];

  return (
    <div>
      <Header title={blogTitle} isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? (
        <>
          <Login setIsLoggedIn={setIsLoggedIn} />
          <Register setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <section className="container">
          {articles.map((article, index) => (
            <Article key={index} title={article.title} description={article.description} image={article.image} texto={article.texto} />
          ))}
        </section>
      )}
      <Footer />
      <Redes />
    </div>
  );
};

export default App;
