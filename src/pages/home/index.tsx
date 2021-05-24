import React, { useState } from 'react';
import { debounce } from 'lodash';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useGetPokemon } from '../../services/pokemon';
import { BaseStat } from '../../types';


const translator: any = {
    'hp': {
        name: 'HP',
        variant: 'success',
    },
    'attack': {
        name: 'ATK',
        variant: 'success',
    },
    'defense': {
        name: 'DEF',
        variant: 'success',
    },
    'special-attack': {
        name: 'S.ATK',
        variant: 'success',
    },
    'special-defense': {
        name: 'S.DEF',
        variant: 'success',
    },
    'speed': {
        name: 'SPD',
        variant: 'success',
    }
};

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

    const debounceOnChange = React.useMemo(() => debounce(handlePokemonSearch, 1000), []);

    if (isPokemonLoading) {
        return (
            <div>
                LOADING...
            </div>
        )
    }

    if (pokemonError) {
        return (
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>No Pokemon Found</Card.Title>
                    <Card.Text>
                        Try again!
                    </Card.Text>
                    <input
                        type='search'
                        placeholder='Type here to search...'
                        onChange={(e) => debounceOnChange(e.target.value)}
                    />
                </Card.Body>
            </Card>
        )
    }

    return (
        <Card style={{ width: '28rem', backgroundColor: '#333333' }} className="m-5 text-center text-light shadow-lg rounded" >
            <Card.Img
                variant="top"
                src={pokemonData?.sprites.other['official-artwork'].front_default}
                style={{ backgroundColor: '#ffffff' }}
            />
            <Card.Body >
                <Card.Title>
                    <h1>{pokemonData?.name}</h1>
                </Card.Title>
                <Card.Text>
                    <Container className="mb-3">
                        <Row sm={12}>
                            {
                                pokemonData?.types.map((type: any, idx: number) => {
                                    return (
                                        <Col key={idx}><span className='badge badge-pill badge-primary' style={{ backgroundColor: 'grey' }}>{type?.type?.name}</span></ Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                    <Container>
                        <Row sm={12}>
                            <Col>
                                <b>{pokemonData?.weight / 10} KG</b>
                            </Col>
                            <Col>
                                <b>{pokemonData?.height / 10} M</b>
                            </Col>
                        </Row>
                        <Row sm={12}>
                            <Col>
                                Weight
                                    </Col>
                            <Col>
                                Height
                                    </Col>
                        </Row>
                    </Container>
                    {BaseStats(pokemonData?.stats)}
                </Card.Text>
            </Card.Body>
            <input
                className="form-control form-control-lg"
                type='search'
                placeholder='Type here to search...'
                onChange={(e) => debounceOnChange(e.target.value.toLowerCase())}
            />
        </Card>
    )
}

function BaseStats(baseStats: BaseStat[] | undefined): JSX.Element {
    return (
        <>
            <h4>Base Stats</h4>
            {
                baseStats?.map((baseStat: BaseStat, idx: number) => {
                    return (
                        <Container key={idx} className="p-1">
                            <Row sm={12}>
                                <Col xs={2}>{translator[baseStat?.stat.name]['name']}</Col>
                                <Col xs={10}>
                                    <ProgressBar
                                        animated
                                        now={baseStat?.base_stat}
                                        // label={`${baseStat?.base_stat}/300`}
                                        max={300}
                                        variant={translator[baseStat?.stat.name]['variant']}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    )
                })
            }
        </>
    )
}


export default HomePage;
