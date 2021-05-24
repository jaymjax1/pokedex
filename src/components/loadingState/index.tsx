import React from 'react';
import ReactLoading from 'react-loading';

function LoadingState(): JSX.Element {
    return (
        <ReactLoading type={'spokes'} color={'black'} height={667} width={375} />
    )
}

export default LoadingState;
