import React, { useState } from 'react';
import PokedexHOC from '../../components/pokedexHOC';
import { debounce } from 'lodash';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useGetPokemon } from '../../services/pokemon';
import BaseStats from '../../components/baseStats';
import LoadingState from '../../components/loadingState';


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
            <PokedexHOC>
                <LoadingState />
            </PokedexHOC>
        )
    }

    if (pokemonError) {
        return (
            <PokedexHOC>
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
            </PokedexHOC>
        )
    }

    return (
        <PokedexHOC>
            <Card.Img
                variant="top"
                src={pokemonData?.sprites.other['official-artwork'].front_default}
                style={{
                    backgroundColor: '#98cb98',
                    border: '50px solid #f2f2f2'
                }}
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
                                        <Col
                                            key={idx}>
                                            <span
                                                className='badge badge-pill badge-primary'
                                                style={{ backgroundColor: 'grey' }}
                                            >
                                                {type?.type?.name}
                                            </span>
                                        </ Col>
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
        </PokedexHOC>
    )
}


export default HomePage;
