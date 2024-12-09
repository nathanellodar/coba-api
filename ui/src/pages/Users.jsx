import React, { useEffect, useState } from 'react'
import TutorialsLayouts from '../layouts/TutorialsLayouts'
import { fetchUsers } from '../utils/Feetch';
import ListUsers from '../components/ListUsers';
const Users = () => {
    const [users, setUsers] = useState([]); // Menyimpan data tutorial
    const [loading, setLoading] = useState(true);  // Menyimpan status loading
    const [error, setError] = useState(null); // Menyimpan error jika terjadi

    // Fetching data tutorial saat komponen pertama kali dimuat
    useEffect(() => {
        const getTutorials = async () => {
            try {
                const data = await fetchUsers(); // Menggunakan fungsi fetchUsers
                setUsers(data); // Update state dengan data tutorial
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
                    <li className='w-2/12'>Name</li>
                    <li className='w-3/12'>Password</li>
                    <li className='w-4/12'>Update At</li>
                    <li>Update At</li>
                </ul>
            </div>
            {console.log(users.datas)}
        </TutorialsLayouts>
    )
}

export default Users