import React from 'react'
import api from '../api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/loader.css"

const Users = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getUsers()
    }, [])


    const getUsers = async () => {
        setLoading(true);
        const token = localStorage.getItem('authTokens').replace(/"/g, '');
        const response = await api.get('/api/admin/get-users', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setUsers(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleDelete = async (id) => {
        const token = localStorage.getItem('authTokens').replace(/"/g, '');
        const body = {
            id: id,
        }

        const response = await api.post('/api/admin/delete-user', body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                getUsers()
            }
            )
            .catch((error) => {
                setError( error.response.data.message)
            }
            );
    }

    return (
        <div className='mb-7'>
            <div>
                <h2 className='font-bold p-3'>Current Users 👥</h2>
            </div>
            {loading ?
                <div class="load-wrapp">
                    <div class="load-3">
                        <p>Sending...</p>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div> : null}
            <section className="antialiased bg-gray-100h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="font-medium text-gray-800">{user.email}</div>
                                                        </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <Link>
                                                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(user._id)}>Remove User</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                {error && <p className='text-red-500 text-center p-3'>{error} 😔</p>}
            </div>

        </div>
    )
}

export default Users
