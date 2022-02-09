import React from 'react';
import { BuscadorPokemon } from './components/buscador/BuscadorPokemon';
import { ResultadoPokemon } from './components/buscador/ResultadoPokemon';
import { CantidadPokemon } from './components/CantidadPokemon';
import { CompraPokemon } from './components/CompraPokemon';

//Conecta la app con redux


export const Tienda = () => {

  return (
    <div className='App container'>
      <div className='row'>
        <div className='col-12'>
          <div className='card mt-5' style={{maxWidth: '370px'}}>
            <div className='row no-gutters'>
              <div className='col-4'>
                <img src={require('./img/Pokemon.jpg')} alt='pokemon' className='card-img' />
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <div className='card-title h3 text-center'>
                    <CantidadPokemon />
                  </div>
                  <CompraPokemon/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Esto es el buscador */}
        <div className='col-12 mt-4 border-top pt-3'>
          <BuscadorPokemon/>
        </div>
        <div className='col-12'>
          <ResultadoPokemon/>
        </div>
      </div>
    </div>
  );
};
