import React from 'react'
import landing_image from '../images/footprint_analysis.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        // from-lime-800 via-lime-600 to-lime-300
        <div className='h-screen w-full flex flex-col gap-14 relative bg-gradient-to-r from-orange-300 from-[-25%] via-slate-600 via-15% to-gray-800 to-80%'
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)", }}>
            {/* backgroundImage: `url(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center'  */}
            <div className="header flex justify-center">
                <header className='w-[80%] h-14 flex justify-between text-white mt-20 items-center mx-5'>
                    <Link to='/'><div className="text-3xl">
                        Carbon Footprint Advisor
                    </div>
                    </Link>
                    <div>
                        <ul className='flex flex-row justify-center gap-10 place-items-center'>
                            <Link to='/home'><li className='items-center'>HOME</li></Link>
                            <li className='items-center'>DASHBOARD</li>
                        </ul>
                    </div>
                    <div>
                        {/* <button className='bg-transparent rounded-xl w-20 h-8'>LOGIN</button> */}
                    </div>
                </header>

            </div>
            <div className="w-full flex justify-center items-center">

                <div className="main grid place-items-center grid-cols-3 w-[80%] mt-10">
                    <div>
                        {/* <h5 className="text-5xl bold text-white font-bold">
                            Daily Diary  <span className='font-thin'>&</span>

                        </h5> */}

                        <h5 className="text-5xl bold text-white font-bold">
                            Carbon Footprint Analysis
                        </h5>
                        <div className='mt-5'>
                            {/* <button className='bg-transparent rounded-xl border-white border-2 w-24 h-8 text-white mt-5 text-sm hover:bg-white hover:text-black'>SIGN UP {'>'}</button> */}
                            <Link to='/home'><button className='bg-transparent rounded-xl border-white border-2 w-32 h-8 text-white mt-5 text-sm hover:bg-white hover:text-black mx-3'>GET STARTED {'>'}</button></Link>
                        </div>
                    </div>
                    <div className='text-white text-2xl'>
                        {/* <h5 className='text-2xl font-bold'>Features</h5> */}
                        <ul className="list-disc pl-4 space-y-3">
                            <li className="mt-2">Generative AI</li>
                            <li className="mt-2">Carbon Footprint Analysis</li>
                            <li className="mt-2">Footprint Reduction Advisor</li>
                        </ul>
                    </div>

                    <div className="image ">
                        <img src={landing_image} alt="" className='rounded-xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage