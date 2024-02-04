
// import { useState } from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

const Household = ({household,setHousehold}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHousehold({ ...household, [name]: value });
      };
    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">

                <h2 className="text-lg font-semibold mb-4 flex flex-row gap-5 items-center"><FaHouseChimney className="text-xl"/> ABOUT YOUR HOUSEHOLD</h2>

                <div className="mb-4">
                    <label htmlFor="numberOfPeople" className="block mb-1">Number of people in the household</label>
                    <input type="number" min="0" id="numberOfPeople" name="numberOfPeople" value={household.numberOfPeople} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="housingType" className="block mb-1">Type of housing</label>
                    <select id="housingType" name="housingType" value={household.housingType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                        <option value="Detached">Detached</option>
                        <option value="Semi Detached">Semi Detached</option>
                        <option value="Attached Single Family Home">Attached Single Family Home</option>
                        <option value="Flat">Flat</option>
                    </select>
                </div>


                <h2 className="text-lg font-semibold mb-4 flex flex-row gap-5 items-center"><AiFillThunderbolt className="text-xl"/> ENERGY CONSUMPTION</h2>
                <div className="mb-4">
                    <label htmlFor="electricityConsumption" className="block mb-1">Electricity consumption (KWh/month)</label>
                    <input type="number" min="0" id="electricityConsumption" name="electricityConsumption" value={household.electricityConsumption} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cleanEnergyPercentage" className="block mb-1">Percentage from a clean energy source (%)</label>
                    <input type="number" min="0" id="cleanEnergyPercentage" name="cleanEnergyPercentage" value={household.cleanEnergyPercentage} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="heatingEnergySource" className="block mb-1">Heating energy source</label>
                    <select id="heatingEnergySource" name="heatingEnergySource" value={household.heatingEnergySource} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                        <option value="No heating">No Heating</option>
                        <option value="Coal">Coal</option>
                        <option value="Natural Gas">Natural Gas</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Renewable Energy">Renewable Energy</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Household