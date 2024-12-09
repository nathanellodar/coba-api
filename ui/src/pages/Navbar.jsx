import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-[#CBD2A4] text-[#54473F] font-bold'>
            <nav className='px-12'>
                <ul className='flex justify-between items-center p-4'>
                    <li className=''>
                        Admin Page
                    </li>
                    <li className=''>
                        <a href='/tutorials'>Tutorials</a>
                    </li>
                    <li className=''>
                        <a href='/users'>Users</a>
                    </li>
                    <li className=''>
                        <a href='#'>Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
