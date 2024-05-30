import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Card = ({ item }) => {
    const { image, name, recipe, price } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const getItem = (food) => {
        if (user && user.email) {
            const cartItem = {
                menuId: food._id,
                email: user.email,
                name, image, price
            }

            // send data using axios
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 2500
                        });

                        // refetch the carts items to update the count
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: "You are not loged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#BB8506",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="max-w-sm bg-[#E8E8E8] border border-gray-200 rounded-lg shadow">
            <span className="relative">
                <p className=" absolute top-2 font-semibold right-2 px-4 py-2 bg-slate-800 text-white rounded">${price}</p>
                <img className="rounded-t-lg" src={image} alt={`${name} image`} />
            </span>
            <div className="p-5">
                <span>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                </span>
                <p className="mb-3 font-normal text-[#737373]">{recipe}</p>
                <div className="flex items-center justify-center">
                    <button onClick={() => getItem(item)} className="px-4 py-3 text-sm transition-all font-medium text-center border border-b-2 border-b-[#BB8506] text-white bg-[#BB8506] rounded-lg hover:bg-[#111827] hover:text-[#BB8506] focus:ring-4 focus:outline-none focus:ring-[#bb85063d]">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card