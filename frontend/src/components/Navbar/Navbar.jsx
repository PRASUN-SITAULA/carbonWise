import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar flex justify-center">
            <header className='w-[80%] h-14 flex justify-between text-white mt-2 items-center mx-5'>
                <Link to='/'> <div className="text-3xl">
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
    )
}

export default Navbar