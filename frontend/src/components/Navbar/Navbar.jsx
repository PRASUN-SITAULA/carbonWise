import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar flex justify-center">
    <header className='w-[80%] h-14 flex justify-between text-white mt-2 items-center mx-5'>
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
  )
}

export default Navbar