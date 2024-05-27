import { useQuery } from "react-query";


const fetchEnergy = async () => {
    const res = await fetch("https://api.carbonintensity.org.uk/generation");
    return res.json();
};

export default function getEnergyValues() {
    const { data, status, refetch } = useQuery("users", fetchEnergy, {
        enabled: false,
    });

    return {
        data: data,
        status: status,
        refetchData: refetch,
    };
}