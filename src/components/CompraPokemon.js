import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction';

export const CompraPokemon = () => {

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(buy_pokemon_action(1));
  }
  
  const handleReturn = () => {
    dispatch(return_pokemon_action(1));
  }

  return (
    <div>
        <button className='btn btn-dark btn-sm mb-2'
                onClick={handleBuy}>Comprar Pokemon</button>
        <button className='btn btn-dark btn-sm'
                onClick={handleReturn}>Devolver Pokemon</button>
    </div>
  );
};


