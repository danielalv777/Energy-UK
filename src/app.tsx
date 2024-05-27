import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// Components
import InitialPage from './components/initialPage';
import EnergyPage from './components/energyPage';

// Styles
import './styles.css'

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div className="container-main-title">
                    <h1 className="main-title">UK Energy Mix</h1>
                </div>
                <div className="container-body">
                    <InitialPage />
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default App;