import React from 'react';
import './css/style.scss'
import Header from "./components/Header/Header";
import Apresentacao from './components/Apresentacao/Apresentacao';
import Experiencia from './components/Experiencia/Experiencia';
import Formacao from './components/Formacao/Formacao';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import Creditos from './components/Creditos/Creditos';


const App = () => {
  return (
    <>
      <Header />
      <Apresentacao />
      <Experiencia />
      <Formacao />
      <Projetos />
      <Contato />
      <Creditos />
    </>
  );
};

export default App;