import React from 'react'
import { Link } from 'react-router-dom';
const ListTutorials = ({ data, index }) => {
    return (
        <div className='w-full bg-[#E9EED9] mt-4'>
            <ul className='flex px-10 border py-2 font-bold text-[#54473F]'>
                <li className='w-1/12'>{index + 1}</li>
                <li className='w-2/12 '>
                    <p>{data.id}</p>
                </li>
                <li className='w-3/12'>
                    <p>{data.title}</p>
                </li>
                <li className="w-4/12">
                    <p className="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">{data.desc}
                    </p>
                </li>

                <li className='w-1/12'>
                    <img
                        src={data.pitcURL}
                        alt=''
                        className='w-20 h-14 rounded-xl'
                    />
                </li>
                <li className='flex gap-4 place-items-center  w-1/12 justify-center'>
                    <Link to={"/tutorials/edit/" + data.id}>
                        <button className='bg-[#54473F] text-[#E9EED9] rounded-xl py-2 px-4'>Edit</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ListTutorials
