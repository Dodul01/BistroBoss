import { FaPen, FaTrash } from "react-icons/fa"
import SectionHeading from "../../../../Components/SectionHeading/SectionHeading"
import useMenu from "../../../../hooks/useMenu"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Item deleted successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }


            }
        });
    }

    return (
        <div>
            <SectionHeading heading={'Manage All Items'} subHeading={'Hurry Up!'} />

            <div className="m-3 p-4 bg-white rounded-lg shadow border">
                {/* Heading */}
                <div className="flex justify-between flex-wrap">
                    <h1 className="text-2xl font-semibold">Total Items: {menu.length}</h1>
                </div>

                {/* Table */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 my-5">
                    <thead className="text-white uppercase bg-[#D1A054]  ">
                        <tr>
                            <th class="p-4">
                                No
                            </th>
                            <th class="px-6 py-3">
                                Item Image
                            </th>
                            <th class="px-6 py-3">
                                Item Name
                            </th>
                            <th class="px-6 py-3">
                                Price
                            </th>
                            <th class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu?.map((item, i) => <tr key={item._id} class="bg-white border-b  hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    {i + 1}
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <img class="w-14 h-14 rounded-2xl" src={`${item.image}`} alt={`${item.name} image`} />
                            </th>
                            <td className="px-6 py-4">
                                <h1>{item.name}</h1>
                            </td>
                            <td className="px-6 py-4">
                                <div class="flex items-center">
                                    <p>${item.price}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 flex gap-2">
                                <Link to={`/dashbord/updateItem/${item?._id}`}>
                                    <div class="flex items-center bg-[#D1A054] text-white p-2 rounded-lg w-10 cursor-pointer">
                                        <FaPen className="text-2xl " />
                                    </div>
                                </Link>
                                <button onClick={() => handleDeleteItem(item)} className="p-2 rounded-lg bg-red-500">
                                    <FaTrash className="text-xl text-white" />
                                </button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageItems