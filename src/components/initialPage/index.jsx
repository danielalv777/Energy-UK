import React from 'react';

// Hooks
import useInitialPage from './useInitialPage';

// Components
import EnergyPage from '../energyPage';

// Styles
import './styles.css';

function InitialPage() {
    const { isInitApp, energyData, statusEnergyData, handleClickInitApp } = useInitialPage();

    if (statusEnergyData === 'loading') return (
        <div className="main-container-initialPage">
            <div className="loader"></div>
        </div>
    );
    if (statusEnergyData === 'error') return <div>Error fetching data</div>;

    return (
      <div className="main-container-initialPage">
        {isInitApp === false ? 
            <div className="container-initApp">
                <h3 className="title-initialPage">This app shows energy consumption in the UK.</h3>
                <p className="description-initialPage">To see the results in real time please press the button start !!!</p>
                <button className="button-initialPage" onClick={handleClickInitApp}>Click to init App</button>
            </div> :
            <EnergyPage energyData={energyData?.data}/>
        }
      </div>
    );
};
  
export default InitialPage;