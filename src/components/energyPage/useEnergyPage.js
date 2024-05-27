// Hooks
import { useState, useRef, useCallback, useEffect, useMemo } from "react";

const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false // Para mostrar la hora en formato de 24 horas
};

export default function useEnergyPage({energyData}) {

    const [ chartSelected, setChartSelected ] = useState(null);
    
    const formatDate = (dateFormat) => {
        const newDate = new Date(dateFormat);
        newDate.setHours(newDate.getHours());
        const formatter = new Intl.DateTimeFormat('es-PE', options);
        const fechaFormateada = formatter.format(newDate);

        return fechaFormateada;
    };
    
    const dateRange = useMemo(() => {
        const startDate = formatDate(energyData?.from);
        const endDate = formatDate(energyData?.to);

        return (startDate + '  to  ' + endDate);
    }, [energyData?.from, energyData?.to]);

    const dataEnergyValues = useMemo(() => {
        const data = energyData?.generationmix;
        const newData = data?.map(dat => {
            return { name: dat.fuel, value: dat.perc}
        });
        return newData;
    }, [energyData?.generationmix?.length]);

    const handleClickPie = (value) => {
        const name = value?.name;
        const percent = value?.percent;
        setChartSelected({ nameFaul: name, percentFaul: percent});
    }

    return {
        dateRange: dateRange,
        dataEnergyValues: dataEnergyValues,
        chartSelected: chartSelected,
        handleClickPie: handleClickPie,
    };
}