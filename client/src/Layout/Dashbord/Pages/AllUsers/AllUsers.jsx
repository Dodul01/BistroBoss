import { useQuery } from '@tanstack/react-query';
import SectionHeading from '../../../../Components/SectionHeading/SectionHeading';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrash } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = (user) => {
        const id = user._id;

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `User Deleted Sucessfuly`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    const handleUpdateUser = (user) => {
        const id = user._id;

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Make user admin sucessfuly`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionHeading heading={'Manage All Users'} subHeading={'How Many?'} />
            {/* Heading */}
            <div className="flex justify-between flex-wrap">
                <h1 className="text-2xl font-semibold">All Users</h1>
                <h1 className="text-2xl font-semibold">Total Users: {users.length}</h1>
            </div>

            {/* Table */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 my-5">
                <thead className="text-white uppercase bg-[#D1A054]">
                    <tr>
                        <th class="p-4">
                            No
                        </th>
                        <th class="px-6 py-3">
                            Name
                        </th>
                        <th class="px-6 py-3">
                            Email
                        </th>
                        <th class="px-6 py-3">
                            Role
                        </th>
                        <th class="px-6 py-3 flex items-center justify-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => <tr key={item._id} class="bg-white border-b  hover:bg-gray-50">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                {i + 1}
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                            <h1>{item.name}</h1>
                        </th>
                        <td className="px-6 py-4">
                            <h1>{item.email}</h1>
                        </td>
                        <td className="px-6 py-4">
                            {item?.role === 'admin' ?
                                <div class="flex items-center bg-[#D1A054] text-white p-2 rounded-lg w-10 cursor-pointer">
                                    <MdAdminPanelSettings className="text-2xl " />
                                </div>
                                :
                                <div onClick={() => handleUpdateUser(item)} class="flex items-center bg-[#D1A054] text-white p-2 rounded-lg w-10 cursor-pointer">
                                    <TiGroup className="text-2xl " />
                                </div>
                            }
                        </td>
                        <td className="px-6 py-4 flex items-center justify-center">
                            <button onClick={() => handleDelete(item)} className="p-2 rounded-lg bg-red-500">
                                <FaTrash className="text-xl text-white" />
                            </button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers