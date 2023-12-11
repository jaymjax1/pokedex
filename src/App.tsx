import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

const HomePage = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
