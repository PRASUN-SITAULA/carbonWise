
import { IoFastFood } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";


const Lifestyle = ({lifestyleData,setLifestyleData}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLifestyleData({ ...lifestyleData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setLifestyleData({
            ...lifestyleData,
            wasteHandling: {
                ...lifestyleData.wasteHandling,
                [name]: checked
            }
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">


            <h2 className="text-lg font-semibold mb-4 flex flex-row gap-5 items-center"><IoFastFood className="text-xl"/>ABOUT YOUR LIFESTYLE</h2>

            <div className="mb-4">
                <label htmlFor="preferredDiet">Your household preferred diet is</label>
                <select id="preferredDiet" name="preferredDiet" value={lifestyleData.preferredDiet} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                    <option value="Meat in most meals">Meat in most meals</option>
                    <option value="Meat in some meals">Meat in some meals</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="buyLocalProducts">Do you buy mostly local products?</label>
                <select id="buyLocalProducts" name="buyLocalProducts" value={lifestyleData.buyLocalProducts} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                    <option value="">I'm not considering this option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="buyFromEnvironmentallyResponsible">Do you buy from environmentally responsible companies?</label>
                <select id="buyFromEnvironmentallyResponsible" name="buyFromEnvironmentallyResponsible" value={lifestyleData.buyFromEnvironmentallyResponsible} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                    <option value="">I'm not considering this option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="eatOutFrequency">How many times a week does your family eat out?</label>
                <input type="number" min="0" id="eatOutFrequency" name="eatOutFrequency" value={lifestyleData.eatOutFrequency} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
            </div>

                <h2 className="text-lg font-semibold mb-4 flex flex-row gap-5 items-center"><FaRecycle className="text-xl"/>CHECK ITEMS YOU RECYCLE</h2>

            <div className="mb-4 grid grid-cols-3">
                <label className="flex items-center mb-2">
                    <input type="checkbox" name="food" checked={lifestyleData.wasteHandling.food} onChange={handleCheckboxChange} className="mr-2" />
                    Food
                </label>
                {/* Include similar checkbox inputs for other waste handling options */}
                <label className="flex items-center mb-2">
                    <input type="checkbox" name="paper" checked={lifestyleData.wasteHandling.paper} onChange={handleCheckboxChange} className="mr-2" />
                    Paper
                </label>
                <label className="flex items-center mb-2">
                    <input type="checkbox" name="tinCans" checked={lifestyleData.wasteHandling.tinCans} onChange={handleCheckboxChange} className="mr-2" />
                    Tin cans
                </label>
                <label className="flex items-center mb-2">
                    <input type="checkbox" name="plastic" checked={lifestyleData.wasteHandling.plastic} onChange={handleCheckboxChange} className="mr-2" />
                    Plastic
                </label>
                <label className="flex items-center mb-2">
                    <input type="checkbox" name="glass" checked={lifestyleData.wasteHandling.glass} onChange={handleCheckboxChange} className="mr-2" />
                    Glass
                </label>
            </div>
        </div>
    );
};

export default Lifestyle;
