import React from 'react';
import Card from 'react-bootstrap/Card'
import PokedexHOC from '../../components/pokedexHOC';
import { ReactComponent as Pokeball } from '../../assets/pokeball.svg';
import { PokemonNotFoundProps } from '../../types';
import { searchPlaceholder } from '../../constants';

function PokemonNotFound(props: PokemonNotFoundProps): JSX.Element {
    return (
        <PokedexHOC>
            <div style={{
                border: '8px solid #222222',
                borderRadius: '0px 0px 50px 50px',
                padding: 10
            }}>
                <Pokeball style={{
                    animation: 'App-logo-spin infinite 20s linear',
                }} />
            </div>
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <input
                    className="form-control form-control-lg"
                    type='search'
                    placeholder={searchPlaceholder}
                    onChange={(e) => props.handler(e.target.value.toLowerCase())}
                />
            </Card.Body>
        </PokedexHOC>
    )
}

export default PokemonNotFound;
