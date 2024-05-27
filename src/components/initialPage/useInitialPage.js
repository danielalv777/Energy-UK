// Hooks
import { useState, useCallback, useEffect } from "react";

// Utils
import getEnergyValues from "./getEnergyValues";

export default function useInitialPage() {

    const [isInitApp, setInitApp] = useState(false);
    const {data, status, refetchData} = getEnergyValues();

    const handleClickInitApp = useCallback(() => {
        setInitApp(true);
        refetchData();
    }, []);

    useEffect(() => {
        let intervalId;
        if (isInitApp) {
            intervalId = setInterval(() => {
                refetchData();
            }, 60000);
        }
        return () => clearInterval(intervalId);
    }, [isInitApp, refetchData]);

    return {
        isInitApp: isInitApp,
        energyData: data,
        statusEnergyData: status,
        handleClickInitApp: handleClickInitApp,
    };
}