import React from 'react';
import Header from "./Header/Header"
import Apresentacao from './Apresentacao/Apresentacao';
import Experiencia from './Experiencia/Experiencia';
import Formacao from './Formacao/Formacao';
import Projetos from './Projetos/Projetos';
import Contato from './Contato/Contato';
import Creditos from './Creditos/Creditos';
import Sobre from './Sobre/Sobre';


const Main = () => {
  return (
    <>
      <Header />
      <Apresentacao />
      <Experiencia />
      <Formacao />
      <Projetos />
      <Sobre />
      <Contato />
      <Creditos />
    </>
  );
};

export default Main;