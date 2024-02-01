import React from 'react'
import homePage_background from '../images/home_background.png'
import DiaryCard from '../components/HomePage/DiaryCard'
import { FaPlus } from "react-icons/fa";
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
    return (
        <div className="h-screen w-full"
            style={{ backgroundImage: `url(${homePage_background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            <Navbar/>
            <hr />
            <div className="header text-3xl font-bold text-center text-white mt-7">
                Diary Collection
            </div>

            <div className="cards grid md:grid-cols-3 lg:grid-cols-5 gap-8 m-14">
                <div className='h-[15rem] shadow-lg bg-black bg-opacity-5 text-white rounded-xl hover:cursor-pointer'>
                    <div className="heading text-lg font-bold w-full text-center my-3 ">
                        2020-01-15
                        <hr />
                    </div>
                    <div className='row-span-4 flex justify-center items-center flex-col h-[60%] '>
                            <FaPlus className='text-8xl' />
                    <div className="text-md">Add Todays Diary</div>
                    </div>
                </div>
                <DiaryCard />
                <DiaryCard />
                <DiaryCard />
                <DiaryCard />
                <DiaryCard />
            </div>
        </div>
    )
}

export default HomePage