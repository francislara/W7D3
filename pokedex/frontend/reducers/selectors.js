import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.entitities.pokemon);
};
