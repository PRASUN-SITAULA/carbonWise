import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useDashboard } from "../utils/DashboardDataProvider";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
);

const DashboardPage = () => {
  const dashboard = useDashboard();

  const sales = {
    labels: ["Household", "Transportation", "Lifestyle"],
    datasets: [
      {
        data: [
          dashboard.household,
          dashboard.transportation,
          dashboard.lifestyle,
        ],
        backgroundColor: ["#4CAF50", "#2196F3", "#0a417a"],
        label: "",
      },
    ],
  };

  const barData = {
    labels: ["Household", "Transportation", "Lifestyle"],
    datasets: [
      {
        data: [
          dashboard.household,
          dashboard.transportation,
          dashboard.lifestyle,
        ],
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
    if (dashboard.household == null && dashboard.transportation == null) {
      dashboard.fetchData();
    } else {
      console.log("Household=", dashboard.household);
      console.log("Transportation=", dashboard.transportation);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {dashboard.household != null && dashboard.transportation != null ? (
        <>
          <div className="text-center pt-24">
            <h1 className="text-3xl font-bold mb-2 mt-5 text-gray-800">
              Your total carbon emission:
            </h1>
            <p className="text-5xl text-teal-600 font-bold">
              {(
                dashboard.household +
                dashboard.transportation +
                dashboard.lifestyle
              ).toFixed(2)}{" "}
              <span className="text-4xl font-bold">tCO2e per year</span>
            </p>
          </div>

          {/* Chart Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:px-32">
            {/* Pie Chart */}
            <div className="h-[25rem] w-[25rem] flex justify-center items-center bg-white rounded-lg shadow-lg p-6">
              <Pie data={sales} options={options} />
            </div>

            {/* Bar Chart */}
            <div className="h-[25rem] flex justify-center items-center bg-white rounded-lg shadow-lg p-6">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="flex flex-col items-center justify-center w-full bg-gray-50 pt-10 pb-20">
            <h2 className="text-3xl font-bold text-teal-700 mb-5">
              Steps You Need To Follow To Reduce Your Carbon Footprint
            </h2>
            <div className="px-10 md:px-24 space-y-4">
              {dashboard.suggestions.split("\n").map((line, index) => (
                <p key={index} className="text-lg text-gray-700">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-screen w-full bg-black bg-opacity-50 flex justify-center items-center text-white">
            <div className="w-full h-[80%] flex justify-center items-center text-white flex-col">
              <h3 className="text-3xl font-bold mb-4">Loading...</h3>
              <p className="text-sm text-gray-300">
                Please add some data to see the dashboard results.
              </p>
              <div className="mt-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
