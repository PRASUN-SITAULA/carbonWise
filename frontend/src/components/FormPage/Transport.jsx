
import { FaCar } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";


const Transport = ({transportData,setTransportData}) => {

    const getArounds = ["Train", "Bus", "Tram"]
    const getAroundsShow = ["Train", "Bus", "Tram"]
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransportData({ ...transportData, [name]: value });
    };

    const handlePrivateFlightsChange = (e) => {
        const { name, value } = e.target;
        setTransportData({
            ...transportData,
            privateFlights: {
                ...transportData.privateFlights,
                [name]: value
            }
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4 flex flex-row gap-5 items-center"><FaCar className="text-xl"/>HOW DO YOU GET AROUND?</h2>

            <h3 className="text-lg mb-4">Average distance per week traveled by all household members using:</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
            {getArounds.map((getAround, index) => (
                <div className='flex justify-between items-center' key={index}>
                    <label htmlFor={getAround}>{getAroundsShow[index]}</label>
                    <input type="number" min="0" id={getAround} name={getAround} onChange={handleChange} className="w-2/5 px-4 py-2 border rounded-md" />
                </div>
            ))}
            </div>
                
                {/* Include similar input fields for other transportation methods */}

            <div className="mb-4">
                <label htmlFor="useCar">Do you use a car?</label>
                <select id="useCar" name="useCar" value={transportData.useCar} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                    <option value="">Please select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                {transportData.useCar === 'Yes' && (
                    <>
                        <label htmlFor="carDistanceTraveled">Total distance traveled (km)</label>
                        <input type="number" min="0" id="carDistanceTraveled" name="carDistanceTraveled" value={transportData.carDistanceTraveled} onChange={handleChange} className="w-full px-4 py-2 border rounded-md mb-2" />
                        {/* <label htmlFor="carConsumption">Average consumption (l/100 km)</label>
                        <input type="number" min="0" id="carConsumption" name="carConsumption" value={transportData.carConsumption} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" /> */}
                    </>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="useCar">Do you use a Motorbike?</label>
                <select id="useMotorbike" name="useMotorbike" value={transportData.useMotorbike} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                    <option value="">Please select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                {transportData.useMotorbike === 'Yes' && (
                    <>
                        <label htmlFor="motorbikeDistanceTraveled">Total distance traveled (km)</label>

                        <input type="number" min="0" id="motorbikeDistanceTraveled" name="motorbikeDistanceTraveled" value={transportData.motorbikeDistanceTraveled} onChange={handleChange} className="w-full px-4 py-2 border rounded-md mb-2" />
                        {/* <label htmlFor="motorbikeConsumption">Average consumption (l/100 km)</label>
                        <input type="number" min="0" id="motorbikeConsumption" name="motorbikeConsumption" value={transportData.motorbikeConsumption} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" /> */}

                    </>
                )}
            </div>
            
            <div className="mb-4">

                <h2 className="text-lg font-semibold mb-4 flex flex-row gap-5 items-center"><FaPlane className="text-3xl"/>PRIVATE FLIGHTS PER YEAR FOR ALL HOUSEHOLD MEMBERS:</h2>
                {/* <label htmlFor="veryLongRange">Very long range round-trip flights ({'>'}12000 km or {'>'}14 hours one way) per year</label>
                <input type="number" id="veryLongRange" name="veryLongRange" value={transportData.privateFlights.veryLongRange} onChange={handlePrivateFlightsChange} className="w-full px-4 py-2 border rounded-md mb-2" /> */}

                <label htmlFor="longRange">Long range round-trip flights ({'>'}6000 km or {'>'}8 hours one way) per year</label>
                <input type="number" min="0" id="longRange" name="longRange" value={transportData.privateFlights.longRange} onChange={handlePrivateFlightsChange} className="w-full px-4 py-2 border rounded-md mb-2" />

                {/* <label htmlFor="mediumRange">Medium range round-trip flights ({'<'}6000 km or {'<'}8 hours one way) per year</label>
                <input type="number" id="mediumRange" name="mediumRange" value={transportData.privateFlights.mediumRange} onChange={handlePrivateFlightsChange} className="w-full px-4 py-2 border rounded-md mb-2" /> */}

                <label htmlFor="shortRange">Short range round-trip flights ({'<'}6000 km or {'<'}8 hours one way) per year</label>
                <input type="number" min="0" id="shortRange" name="shortRange" value={transportData.privateFlights.shortRange} onChange={handlePrivateFlightsChange} className="w-full px-4 py-2 border rounded-md mb-2" />

                {/* Include similar input fields for other flight ranges */}
            </div>
        </div>
    );
};

export default Transport;
