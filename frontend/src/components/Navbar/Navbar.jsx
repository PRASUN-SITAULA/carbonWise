import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useDashboard } from '../../utils/DashboardDataProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const dashboard = useDashboard();

    const handleDashboard = () =>{
        dashboard.fetchData();
        navigate('/dashboard');
    }
    return (
        <div className="navbar flex justify-center">
            <header className='w-[80%] h-14 flex justify-between text-white mt-2 items-center mx-5'>
                <Link to='/'> <div className="text-3xl">
                    CarbonWise
                </div>
                </Link>
                <div>
                    <ul className='flex flex-row justify-center gap-10 place-items-center'>
                        <Link to='/home'><li className='items-center'>HOME</li></Link>
                        <Link to='/dashboard'><li className='items-center' onClick={handleDashboard}>DASHBOARD</li></Link>
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