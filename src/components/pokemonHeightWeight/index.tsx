import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

interface PokemonHeightWeightProps {
    height: number;
    weight: number;
}

function PokemonHeightWeight(props: PokemonHeightWeightProps): JSX.Element {
    return (
        <Container>
            <Row sm={12}>
                <Col><b>{props.weight} KG</b></Col>
                <Col><b>{props.height} M</b></Col>
            </Row>
            <Row sm={12}>
                <Col>Weight</Col>
                <Col>Height</Col>
            </Row>
        </Container>
    )
}

export default PokemonHeightWeight;
