import React from 'react';
import Card from 'react-bootstrap/Card';

function PokedexHOC(props: any): JSX.Element {
    return (
        <Card
            style={{
                width: '28rem',
                backgroundColor: '#333333',
            }}
            className="m-5 text-center text-light rounded mx-auto"
        >
            {props.children}
        </Card>
    )
}

export default PokedexHOC;

