import React from 'react';
import PokedexHOC from '../../components/pokedexHOC';
import PokemonTypePill from '../../components/pokemonTypePill';
import PokemonHeightWeight from '../../components/pokemonHeightWeight';
import PokemonBaseStats from '../pokemonBaseStats';
import Card from 'react-bootstrap/Card'
import typeColorMap from '../../utils/typeColorMap';
import { PokedexBodyProps } from '../../types';
import { searchPlaceholder } from '../../constants';

function PokedexBody(props: PokedexBodyProps): JSX.Element {
    return (
        <PokedexHOC>
            <Card.Img
                variant="top"
                src={props.data?.sprites.other['official-artwork'].front_default}
                style={{
                    backgroundColor: typeColorMap[props.data?.types[0].type.name],
                    border: '8px solid #222222',
                    borderRadius: '0px 0px 50px 50px',
                }}
            />
            <Card.Body >
                <Card.Title>
                    <h1>
                        {props.data?.name}
                    </h1>
                </Card.Title>
                <Card.Text>
                    <PokemonTypePill
                        types={props.data?.types}
                    />
                    <PokemonHeightWeight
                        height={props.data?.height / 10}
                        weight={props.data?.weight / 10}
                    />
                    <PokemonBaseStats
                        baseStats={props.data?.stats}
                    />
                </Card.Text>
            </Card.Body>
            <input
                className="form-control form-control-lg"
                type='search'
                placeholder={searchPlaceholder}
                onChange={(e) => props.handler(e.target.value.toLowerCase())}
            />
        </PokedexHOC >
    )
}

export default PokedexBody;
