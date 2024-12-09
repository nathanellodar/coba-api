import React from 'react'
import Navbar from '../pages/Navbar'

const TutorialsLayouts = ({ children }) => {
    return (
        <main className='px-12 py-4'>
            <Navbar />
            {children}
        </main>
    )
}

export default TutorialsLayouts
