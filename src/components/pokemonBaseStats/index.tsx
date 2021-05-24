import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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

interface PokemonBaseStatsProps {
    baseStats: BaseStat[];
}

function PokemonBaseStats(props: PokemonBaseStatsProps): JSX.Element {
    return (
        <>
            <h4>Base Stats</h4>
            {
                props.baseStats?.map((baseStat: BaseStat, idx: number) => {
                    return (
                        <Container key={idx} className="p-1">
                            <Row sm={12}>
                                <Col
                                    xs={2}>
                                    {translator[baseStat?.stat.name]['name']}
                                </Col>
                                <Col xs={10}>
                                    <ProgressBar
                                        animated
                                        now={baseStat?.base_stat}
                                        label={`${baseStat?.base_stat}/300`}
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

export default PokemonBaseStats;
