import { QueryObserverResult, useQuery } from 'react-query';
import { PokemonType } from '../../types';
import * as client from './client';

export function useGetPokemon(searchTerm: string): QueryObserverResult<PokemonType, Error> {
    return useQuery(['getPokemon', searchTerm], () => client.getPokemon(searchTerm), { retry: false })
}
