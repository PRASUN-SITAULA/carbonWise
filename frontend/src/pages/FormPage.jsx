import React, { useState } from 'react';
import axios from 'axios';
import Household from '../components/FormPage/Household';
import Transport from '../components/FormPage/Transport';
import Lifestyle from '../components/FormPage/Lifestyle';
import Navbar from '../components/Navbar/Navbar';

const FormPage = () => {
    const options = ["Household", "Transport", "Lifestyle"];
    const [selected, setSelected] = useState(options[0]);

    const [household, setHousehold] = useState({
        numberOfPeople: 4,
        housingType: 'Detached',
        electricityConsumption: '',
        cleanEnergyPercentage: 0,
        heatingEnergySource: 'Coal'
    });
    const [lifestyleData, setLifestyleData] = useState({
        preferredDiet: 'Meat in most meals',
        buyLocalProducts: '',
        buyFromEnvironmentallyResponsible: '',
        eatOutFrequency: 0,
        wasteHandling: {
            food: false,
            paper: false,
            tinCans: false,
            plastic: false,
            glass: false
        }
    });
    const [transportData, setTransportData] = useState({
        intercityTrain: 0,
        subway: 0,
        intercityBus: 0,
        cityBus: 0,
        tram: 0,
        bikeWalk: 0,
        useCar: '',
        carMileage: '',
        carConsumption: '',
        useMotorbike: '',
        motorbikeMileage: '',
        motorbikeConsumption: '',
        privateFlights: {
            longRange: 0,
            shortRange: 0
        }
    });

    const handleSubmit = async (e) =>{
        const inputData = {household, lifestyleData, transportData};
        console.log(household,lifestyleData,transportData);
        e.preventDefault();

        try{
            const response = await axios.post('/get-user-input', inputData);

            if(response.status == 200){
                console.log("data submitted successfully.");
            }
            else{
                console.error("submission failed", response.statusText); 
            }
        }catch(err){
            console.log("Error", err);

        }
    }

    return (
        <>
            <div className='bg-gray-50 pb-10'>
                <div className='bg-black'>
                    <Navbar />
                </div>

                <div className='grid md:w-1/2 grid-cols-1 gap-4 w-[20rem] md:grid-cols-3 md:gap-10 mx-auto my-10'>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`text-2xl border-2 rounded-md p-1 text-center border-blue-500 ${selected === option ? "bg-blue-500 text-white " : "hover:bg-gray-200"}`}
                            onClick={() => { setSelected(option) }}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {selected === options[0] && <Household household={household} setHousehold={setHousehold}/>}
                {selected === options[1] && <Transport transportData={transportData} setTransportData={setTransportData}/>}
                {selected === options[2] && <Lifestyle lifestyleData={lifestyleData} setLifestyleData={setLifestyleData}/>}

                <div className='w-full flex justify-center mt-3 mb-14'>
                    {options.indexOf(selected) < 2 && <button
                        className="text-xl w-[28rem] border-2 rounded-md p-1 text-center border-blue-500 text-white bg-green-500 hover:text-white"
                        onClick={() => { setSelected(options[(options.indexOf(selected) + 1) % 3]) }}
                    >
                        Next
                    </button>}
                    {options.indexOf(selected) === 2 && <button
                        className="text-xl w-[28rem] border-2 rounded-md p-1 text-center border-blue-500 text-white bg-green-500 hover:text-white"
                        onClick={() => { handleSubmit() }}
                    >
                        Get Footprints
                    </button>}
                </div>
            </div>
        </>
    );
};

export default FormPage;
