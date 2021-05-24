import React, { useState, useMemo } from 'react';
import { debounce } from 'lodash';
import LoadingState from '../../components/loadingState';
import PokemonNotFound from '../../components/pokemonNotFound';
import PokedexBody from '../../components/pokedexBody';
import SomethingWentWrong from '../../components/somethingWentWrong';
import { useGetPokemon } from '../../services/pokemon';
import { noPokemonFound, tryAgain } from '../../constants';

function HomePage(): JSX.Element {
    const [pokemonSearch, updatePokemonSearch] = useState('bulbasaur');

    const {
        data: pokemonData,
        isLoading: isPokemonLoading,
        error: pokemonError,
    } = useGetPokemon(pokemonSearch);

    const handlePokemonSearch = (value: any) => {
        if (value.length >= 3) {
            updatePokemonSearch(value);
        }
    };

    const debounceOnChange = useMemo(() => debounce(handlePokemonSearch, 1000), []);

    if (isPokemonLoading) {
        return (
            <LoadingState />
        )
    }

    if (pokemonError) {
        return (
            <PokemonNotFound
                title={noPokemonFound}
                text={tryAgain}
                handler={debounceOnChange} />
        )
    }

    if (pokemonData) {
        return (
            <PokedexBody
                data={pokemonData}
                handler={debounceOnChange}
            />
        )
    }

    return (
        <SomethingWentWrong />
    )
}

export default HomePage;
