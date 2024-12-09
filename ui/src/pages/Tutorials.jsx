import React, { useState, useEffect } from 'react';
import TutorialsLayouts from '../layouts/TutorialsLayouts';
import ListTutorials from '../components/ListTutorials';
import { fetchTutorials } from '../utils/Feetch'; // Pastikan untuk mengimpor fungsi fetchTutorials
const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]); // Menyimpan data tutorial
    const [loading, setLoading] = useState(true);  // Menyimpan status loading
    const [error, setError] = useState(null); // Menyimpan error jika terjadi
    
    // Fetching data tutorial saat komponen pertama kali dimuat
    useEffect(() => {
        const getTutorials = async () => {
            try {
                const data = await fetchTutorials(); // Menggunakan fungsi fetchTutorials
                setTutorials(data); // Update state dengan data tutorial
                setLoading(false); // Set loading ke false setelah data diterima
            } catch (error) {
                setError(error.message); // Set error jika terjadi masalah
                setLoading(false);
            }
        };

        getTutorials();
    }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat
    if (loading) {
        return <div>Loading...</div>; // Tampilkan loading indicator saat data masih dimuat
    }

    if (error) {
        return <div>Error: {error}</div>; // Tampilkan pesan error jika terjadi kesalahan
    }

    return (
        <TutorialsLayouts>
            <div>
                <ul className='flex px-8 border py-2 font-bold text-[#54473F]'>
                    <li className='w-1/12'>No</li>
                    <li className='w-2/12'>ID Tutorial</li>
                    <li className='w-3/12'>Title</li>
                    <li className='w-4/12'>Description</li>
                    <li>Image</li>
                </ul>
            </div>
            {tutorials.payload.datas.map((tutorial, index) => (
                <ListTutorials data={tutorial} index={index} />
            ))}
        </TutorialsLayouts>
    );
};

export default Tutorials;
