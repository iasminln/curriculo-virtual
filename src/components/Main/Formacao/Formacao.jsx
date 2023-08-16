import React from 'react';
import Titulo from '../Util/Titulo';


const Formacao = () => {


  return (
    <section className='formacao' id='formacao'>
      <div className='container'>
       <div className='content-text'><Titulo>Formação</Titulo></div> 
        <div className='content'>
          <div className='box-formacao'>
            <p className='box-text-01'>Tecnólogo</p>
            <p className='box-text-02'>Análise e Desenvolvimento de Sistemas</p>
            <p className='box-text-03'>Centro Universitário de Maringá (UniCesumar)</p>
            <p className='box-text-04'>02/2021 - Em andamento</p>
          </div>

          <div className='box-formacao'>
            <p className='box-text-01'>Bacharel</p>
            <p className='box-text-02'>Engenharia Civil</p>
            <p className='box-text-03'>Universidade Tecnológica Federal do Paraná (UTFPR)</p>
            <p className='box-text-04'>02/2015 - 12/2019</p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Formacao;