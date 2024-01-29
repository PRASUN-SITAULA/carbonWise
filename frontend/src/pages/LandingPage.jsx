import React from 'react'
import landing_image from '../images/slider1.png'

const LandingPage = () => {
    return (
        // from-lime-800 via-lime-600 to-lime-300
        <div className='h-screen w-full flex flex-col gap-14 relative bg-gradient-to-t from-cyan-400 to-purple-800'
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)", }}>
            {/* backgroundImage: `url(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center'  */}
            <div className="header flex justify-center">
                <header className='w-[80%] h-14 flex justify-between text-white mt-20 items-center mx-5'>
                    <div className="text-3xl">
                        My diary
                    </div>
                    <div>
                        <ul className='flex flex-row justify-center gap-10 place-items-center'>
                            <li className='items-center'>HOME</li>
                            <li className='items-center'>DASHBOARD</li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-transparent rounded-xl w-20 h-8'>LOGIN</button>
                    </div>
                </header>

            </div>
            <div className="w-full flex justify-center items-center">

                <div className="main grid place-items-center grid-cols-3 w-[80%]">
                    <div>
                        <h5 className="text-5xl bold text-white font-bold">
                            Daily Diary  <span className='font-thin'>&</span>

                        </h5>

                        <h5 className="text-5xl bold text-white font-bold">
                            Carbon Footprint Analysis
                        </h5>
                        <div className='mt-5'>
                            <button className='bg-transparent rounded-xl border-white border-2 w-24 h-8 text-white mt-5 text-sm hover:bg-white hover:text-black'>SIGN UP {'>'}</button>
                        <button className='bg-transparent rounded-xl border-white border-2 w-32 h-8 text-white mt-5 text-sm hover:bg-white hover:text-black mx-3'>LEARN MORE</button>
                        </div>
                    </div>
                    <div className='text-white text-2xl'>
                        {/* <h5 className='text-2xl font-bold'>Features</h5> */}
                        <ul className="list-disc pl-4 space-y-3">
                            <li className="mt-2">Advisor</li>
                            <li className="mt-2">Carbon Footprint Analysis</li>
                            <li className="mt-2">Daily Diary</li>
                        </ul>
                    </div>

                    <div className="image">
                        <img src={landing_image} alt="" className='w-[20rem] ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage