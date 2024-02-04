import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const DashboardPage = () => {
    return (
        <div>
            <div className='bg-gradient-to-t from-cyan-700 to-purple-800'>
                <Navbar/>
            </div>
            <div>
                Dashboard
            </div>
        </div>
    )
}

export default DashboardPage