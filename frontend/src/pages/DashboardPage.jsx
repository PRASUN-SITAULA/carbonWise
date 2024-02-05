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
                backgroundColor: ["#4CAF50", "#2196F3", "#0a417a"],
                label: ''
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
        if(dashboard.household == null && dashboard.transportation == null){
            dashboard.fetchData()
        }
    }, [])




    return (
        <div>

            {
                (dashboard.household != null && dashboard.transportation != null) ?
                    <>
                        <div className='bg-gradient-to-t from-cyan-700 to-purple-800'>
                            <Navbar />
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-2 mt-5">
                                Your total carbon emission:
                            </h1>
                            <p className="text-2xl">
                                {(dashboard.household + dashboard.transportation + dashboard.lifestyle).toFixed(2)} <span className=' text-xl'>tCO2e per year</span>
                            </p>
                        </div>

                        <div className='w-full grid grid-cols-1 md:grid-cols-3 text-center'>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 p-14 md:px-32 gap-10 '>
                            <div className='h-[25rem] w-[25rem] flex justify-center items-center'>
                                <Pie data={sales} options={options} className='h-[20rem] w-[20rem]'></Pie>
                            </div>
                            <div className='h-[25rem] flex justify-center items-center'>
                                <Bar data={barData} options={barOptions}></Bar>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full bg-gray-50 pt-5 pb-20'>
                            <h2 className='text-3xl font-bold text-green-700 mb-5'>Steps You Need To Follow To Reduce Your Carbon Footprint</h2>
                            <div className='px-10 md:px-24'>
                                {dashboard.suggestions.split('\n').map((line, index) => (
                                    <p key={index} className='my-2'>{line}</p>
                                ))}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="h-screen w-full bg-black bg-opacity-50 ">

                            <div className='bg-gradient-to-t from-cyan-700 to-purple-800'>
                                <Navbar />
                            </div>
                            <div className="w-full h-[80%] flex justify-center items-center text-white flex-col">
                                <h3 className='text-3xl font-bold mb-4'>Loading...</h3>
                                <p className="text-sm text-gray-300">(Please fill the data if you haven't filled it)</p>
                                <div className="mt-8">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
                                </div>
                            </div>

                        </div>
                    </>


            }
        </div>
    )
}

export default DashboardPage