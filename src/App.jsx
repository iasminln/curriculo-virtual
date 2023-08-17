import React from 'react';
import Header from "./components/Header/Header"
import Apresentacao from './components/Apresentacao/Apresentacao';
import Experiencia from './components/Experiencia/Experiencia';
import Formacao from './components/Formacao/Formacao';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import Creditos from './components/Creditos/Creditos';
import Sobre from './components/Sobre/Sobre';
import { UserStorage } from './userContext';
import './css/style.scss'


const Main = () => {
  return (
    <>
      <UserStorage>
        <Header />
        <Apresentacao />
        <Experiencia />
        <Formacao />
        <Projetos />
        <Sobre />
        <Contato />
        <Creditos />
      </UserStorage>
    </>
  );
};

export default Main;