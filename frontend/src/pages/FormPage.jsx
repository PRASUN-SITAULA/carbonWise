import { useState } from "react";
import axios from "axios";

import Household from "../components/FormPage/Household";
import Transport from "../components/FormPage/Transport";
import Lifestyle from "../components/FormPage/Lifestyle";
import Navbar from "../components/Navbar/Navbar";
import { useDashboard } from "../utils/DashboardDataProvider";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();
  const options = ["Household", "Transport", "Lifestyle"];
  const [selected, setSelected] = useState(options[0]);
  const [showLoading, setShowLoading] = useState(false);

  const dashboard = useDashboard();

  const [household, setHousehold] = useState({
    numberOfPeople: 4,
    housingType: "Detached",
    electricityConsumption: "",
    cleanEnergyPercentage: 0,
    heatingEnergySource: "Coal",
  });
  const [lifestyleData, setLifestyleData] = useState({
    preferredDiet: "Meat in most meals",
    buyLocalProducts: "",
    buyFromEnvironmentallyResponsible: "",
    eatOutFrequency: 0,
    wasteHandling: {
      food: false,
      paper: false,
      tinCans: false,
      plastic: false,
      glass: false,
    },
  });
  const [transportData, setTransportData] = useState({
    Train: 0,
    Bus: 0,
    Tram: 0,
    useCar: "",
    carDistanceTraveled: "",
    // carConsumption: '',
    useMotorbike: "",
    motorbikeDistanceTraveled: "",
    // motorbikeConsumption: '',
    privateFlights: {
      longRange: 0,
      shortRange: 0,
    },
  });

  const handleSubmit = async (e) => {
    const inputData = { household, lifestyleData, transportData };
    e.preventDefault();
    console.log("handle submit ");

    try {
      const response = await axios.post(
        "http://localhost:3000/get-user-input",
        inputData,
      );

      if (response.status == 200) {
        console.log("data submitted successfully.");
      } else {
        console.error("submission failed", response.statusText);
      }
    } catch (err) {
      console.log("Error", err);
    }
    setShowLoading(true);
    await dashboard.fetchData();
    setShowLoading(false);
    navigate("/dashboard");
  };

  return (
    <>
      {showLoading == true ? (
        <>
          <div className="h-screen w-full bg-black bg-opacity-50 ">
            <Navbar />

            <div className="w-full h-[80%] flex justify-center items-center text-white flex-col pt-24">
              <h3 className="text-3xl font-bold mb-4">Loading...</h3>
              <p className="text-sm text-gray-300">
                (Please wait till we process your data.)
              </p>
              <div className="mt-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#f0f5f9] pb-10">
            <Navbar />
            <div className=" md:grid-cols-7 px-10 pt-24">
              <div className="col-span-5">
                <div className="grid md:w-1/2 grid-cols-1 gap-4 w-[20rem] md:grid-cols-3 md:gap-10 mx-auto my-10">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      className={`text-2xl border-2 rounded-md p-1 text-center border-green-500 px-4 ${selected === option ? "bg-teal-500 text-white " : "hover:bg-teal-200"}`}
                      onClick={() => {
                        setSelected(option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {selected === options[0] && (
                  <Household
                    household={household}
                    setHousehold={setHousehold}
                  />
                )}
                {selected === options[1] && (
                  <Transport
                    transportData={transportData}
                    setTransportData={setTransportData}
                  />
                )}
                {selected === options[2] && (
                  <Lifestyle
                    lifestyleData={lifestyleData}
                    setLifestyleData={setLifestyleData}
                  />
                )}

                <div className="w-full flex justify-center mt-3 mb-14">
                  {options.indexOf(selected) < 2 && (
                    <button
                      className="text-xl w-[28rem] border-2 rounded-md p-1 text-center border-blue-500 text-white bg-teal-600 hover:text-white"
                      onClick={() => {
                        setSelected(
                          options[(options.indexOf(selected) + 1) % 3],
                        );
                      }}
                    >
                      Next
                    </button>
                  )}
                  {options.indexOf(selected) === 2 && (
                    <button
                      className="text-xl w-[28rem] border-2 rounded-md p-1 text-center border-blue-500 text-white bg-teal-600 hover:text-white"
                      onClick={handleSubmit}
                    >
                      Get Footprints
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormPage;
