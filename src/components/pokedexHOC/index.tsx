import React, { Suspense } from 'react';
import { ReactComponent as Pokeball } from '../../assets/pokeball.svg';
import Card from 'react-bootstrap/Card';

function PokedexHOC(props: any): JSX.Element {
    return (
        <Suspense fallback={Pokeball}>
            <Card
                style={{
                    width: '28rem',
                    backgroundColor: '#333333',
                    padding: 5
                }}
                className="m-5 text-center text-light rounded mx-auto shadow-lg"
            >
                {props.children}
            </Card>
        </Suspense>
    )
}

export default PokedexHOC;

