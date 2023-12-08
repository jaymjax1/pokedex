import React from 'react';
import PokedexHOC from '../../components/pokedexHOC';

function LoadingState(): JSX.Element {
    return (
        <PokedexHOC>
            <div style={{
                border: '8px solid #222222',
                borderRadius: '0px 0px 50px 50px',
            }}>
                <p>
                    Loading
                </p>
            </div>
        </PokedexHOC >
    )
}
export default LoadingState;
