import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "react-query";
import App from './App';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

const domNode = document.getElementById('root');
const root = createRoot(domNode!);
root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>
);