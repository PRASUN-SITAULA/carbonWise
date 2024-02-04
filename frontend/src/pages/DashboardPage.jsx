import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const DashboardPage = () => {
    const sales = {
        labels: [
            "localMarket",
            "export",
            "others",
            "marketing",
            "transportation",
            "otherExpense",
        ],
        datasets: [
            {
                data: [20000, 15000, 20000, 2000, 5000, 2000],
                backgroundColor: ["aqua", "orange", "green", "yellow", "purple", "red"],
            },
        ],
    };

    const barData = {
        // Name of the variables on x-axies for each bar
        labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
        datasets: [
            {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1552, 1319, 613, 1400],
                // Color of each bar
                backgroundColor:
                    ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
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
                labels: {
                    fontSize: 15,
                },
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis asperiores tenetur voluptatibus fuga, enim suscipit repellat nesciunt nisi tempora perferendis, incidunt nemo porro voluptatum sit iusto natus, minima temporibus tempore. Voluptatem ipsam magni, cumque nobis doloribus itaque placeat quaerat, laboriosam eum laborum provident tenetur consectetur incidunt officia a. Aperiam consequuntur pariatur dicta. Repellendus quo quibusdam, eos, explicabo fuga magni consectetur molestiae aliquid suscipit nulla soluta. Iste reprehenderit magnam praesentium, aliquam quibusdam numquam dolore aperiam eos natus cum quia impedit. Distinctio excepturi aliquid odit ipsa fugiat! Dolorum laborum soluta iusto ex? Deleniti modi autem magni eligendi delectus similique.</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage