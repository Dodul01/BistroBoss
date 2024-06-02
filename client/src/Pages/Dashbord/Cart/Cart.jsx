import { FaTrash } from "react-icons/fa"
import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
import useCart from "../../../hooks/useCart"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Item Deleted Sucessfuly`,
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
            <SectionHeading heading={'Wanna Add More?'} subHeading={'My Cart'} />
            <div className="m-3 p-4 bg-white rounded-lg shadow border">
                {/* Heading */}
                <div className="flex justify-between flex-wrap">
                    <h1 className="text-2xl font-semibold">Total Order: {cart?.length}</h1>
                    <h1 className="text-2xl font-semibold">Total Price: ${totalPrice}</h1>
                    <button className="bg-[#D1A054] px-6 py-2 rounded-lg font-semibold text-white">Pay</button>
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
                        {cart.map((item, i) => <tr key={item._id} class="bg-white border-b  hover:bg-gray-50">
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
                            <td className="px-6 py-4">
                                <button onClick={() => handleDelete(item._id)} className="p-2 rounded-lg bg-red-500">
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

export default Cart