import React from 'react';
import ReactLoading from 'react-loading';
import PokedexHOC from '../../components/pokedexHOC';

function LoadingState(): JSX.Element {
    return (
        <PokedexHOC>
            <div style={{
                border: '8px solid #222222',
                borderRadius: '0px 0px 50px 50px',
            }}>
                <ReactLoading
                    type={'bubbles'}
                    color={'#ed5564'}
                    height={400}
                    width={'100%'}
                />
            </div>
        </PokedexHOC >
    )
}
export default LoadingState;
