import React from 'react'

const Bloglists = ({ posts }) => {
    return (
        <div>
            <section className="antialiased bg-gray-100h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Title</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Date</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Pinned</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {posts.map((post) => (
                                            <tr key={post._id}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="font-medium text-gray-800">{post.title}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{new Date(post.date).toLocaleDateString()}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    {post.pin === false ? <div className="text-left font-medium text-red-500">False</div> :
                                                    <div className="text-left font-medium text-green-500">True</div>}
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

        </div>
    )
}

export default Bloglists
