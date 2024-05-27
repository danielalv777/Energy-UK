import React from 'react';

// Hooks
import useEnergyPage from './useEnergyPage';

// Components
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Styles
import './styles.css'

function EnergyPage({energyData}) {

    const { dateRange, dataEnergyValues, chartSelected, handleClickPie } = useEnergyPage({energyData: energyData});
    
    return (
      <div className="container-Charts">
        <p className="label-date">The next chart date is showing for the date: {dateRange}</p>
        <p className="label-date-additional">If you want to know more details about the kind of energy please click on any from the chart</p>
        <div className="container-pieChart">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={dataEnergyValues}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
              onClick={(value) => handleClickPie(value)}
            />
            <Tooltip />
          </PieChart>

          {chartSelected && (
            <div className="container-details">
              <h2>{chartSelected.nameFaul.toUpperCase()}</h2>
              <span className="detail-faul">The percentage consumed of this kind of energy is: {(chartSelected.percentFaul * 100)} %</span>
            </div>
          )}
        </div>
      </div>
    );
};
  
export default EnergyPage;