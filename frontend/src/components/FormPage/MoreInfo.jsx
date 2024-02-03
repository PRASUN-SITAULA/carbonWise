import carbon_footprint from '../../images/carbon-footprint.webp'
const MoreInfo = () => {
    return (
        <>
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md h-[45rem]">
                <h2 className="text-xl font-semibold mb-4">Understanding Carbon Footprint</h2>
                <img src={carbon_footprint} alt="" className='rounded-lg' />
                <p className="text-gray-700 leading-relaxed mt-5">
                    A carbon footprint represents the collective volume of greenhouse gases, including carbon dioxide and methane, produced by human activities.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    The global average carbon footprint per individual stands at four tons. Nonetheless, to mitigate the impacts of global warming, it is imperative that we collectively endeavor to reduce this figure to less than 2 tons per person by the year 2050.
                </p>

                <p className='bg-yellow-100 p-5 text-md rounded-xl mt-8'>
                    Use our interactive calculator to learn your carbon footprint and actions to take make better place for future generation.
                </p>
            </div>

        </>
    );
};

export default MoreInfo;
