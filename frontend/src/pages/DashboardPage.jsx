import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { useDashboard } from '../utils/DashboardDataProvider';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const DashboardPage = () => {
    const dashboard = useDashboard();

    const sales = {
        labels: [
            "Household",
            "Transportation",
            "Lifestyle",
        ],
        datasets: [
            {
                data: [dashboard.household, dashboard.transportation, dashboard.lifestyle],
                backgroundColor: ["#4CAF50", "#2196F3", "#0a417a"], // Updated colors
                label: '' // Added label for dataset
            },
        ],
    };
    
    const barData = {
        labels: ["Household", "Transportation", "Lifestyle"],
        datasets: [
            {
                data: [dashboard.household, dashboard.transportation, dashboard.lifestyle],
                backgroundColor: ["#4CAF50", "#2196F3", "#0a417a"],
                borderColor: ["#4CAF50", "#2196F3", "#0a417a"],
                borderWidth: 0.5,
            },
        ],
    };
    
    const barOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                },
            },
        },
        plugins: {
            legend: {
                display: false, 
            },
        },
    };


    const options = {
        plugins: {
            legend: {
                // display: false,
            },
        },
    };

    useEffect(() => {
        // sales.datasets[0].data[0]=dashboard.household
        // sales.datasets[0].data[1]=dashboard.transportation
        // sales.datasets[0].data[2]=dashboard.lifestyle
    },[])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log("Trying to fetch data");
    //         try {
    //             const response = await axios.get('http://localhost:3000/carbon-footprint-advisor');
    
    //             if (response.status === 200) {
    //                 console.log(response);
    //                 sales.datasets[0].data[0]=response.data.electricityCarbonEmission
    //                 sales.datasets[0].data[1]=response.data.transporationCarbonEmission
    //                 sales.datasets[0].data[2]=response.data.totalWasteCarbonEmission

    //                 console.log("Data = ",sales)
    //             } else {
    //                 console.error("fetch failed", response.statusText);
    //             }
    //         } catch (err) {
    //             console.log("Error", err);
    //         }
    //     };
    
    //     fetchData();
    
    // }, []);



    return (
        <div>
            <div className='bg-gradient-to-t from-cyan-700 to-purple-800'>
                <Navbar />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 p-14 md:px-32 gap-10 '>
                <div className='h-[25rem] w-[25rem] flex justify-center items-center'>
                    <Pie data={sales} options={options} className='h-[20rem] w-[20rem]'></Pie>
                </div>
                <div className='h-[25rem] flex justify-center items-center'>
                    <Bar data={barData} options={barOptions}></Bar>
                </div>
            </div>

            <div className='flex justify-center mt-5 flex-col w-full items-center'>
                <h2 className='text-3xl font-bold text-green-700'>Steps you should follow to reduce your carbon footprint.</h2>
                <div className='my-5 px-10 md:px-20'>
                    <p>{dashboard.suggestions}</p>
                    {typeof(dashboard.suggestions)}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage