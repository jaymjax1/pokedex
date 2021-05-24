import React from 'react';
import typeColorMap from '../../utils/typeColorMap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { PokemonTypePillProps } from '../../types';

function PokemonTypePill(props: PokemonTypePillProps): JSX.Element {
    return (
        <Container className="mb-3">
            <Row sm={12}>
                {props.types.map((type: any, idx: number) => {
                    return (
                        <Col key={idx}>
                            <span
                                className='badge badge-pill badge-primary'
                                style={{
                                    backgroundColor: typeColorMap[type?.type?.name],
                                    width: 100,
                                    height: 20
                                }}
                            >
                                {type?.type?.name.toUpperCase()}
                            </span>
                        </ Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default PokemonTypePill;
