import { FaUtensils } from "react-icons/fa";
import SectionHeading from "../../../../Components/SectionHeading/SectionHeading";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const cloudinary_cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cloudinary_upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const cloudinary_upload_url = `https://api.cloudinary.com/v1_1/${cloudinary_cloud_name}/image/upload`;

const AddItem = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const handleAddItems = async (e) => {
        e.preventDefault();
        const Form = e.target;
        const recipeName = Form.recipeName.value;
        const category = Form.category.value;
        const price = Form.price.value;
        const details = Form.details.value;
        const imageFile = Form.image.files[0];

        // Creating FormData to handle the file upload
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', cloudinary_upload_preset);

        try {
            // Posting the image to Cloudinary
            const imageUploadResponse = await axiosPublic.post(cloudinary_upload_url, formData);

            const imageUploadData = imageUploadResponse.data;

            // Check if the API response has the URL
            if (!imageUploadData.url) {
                throw new Error('Invalid response from image upload service');
            }

            const imageUrl = imageUploadData.url;

            // Creating the recipe object
            const menuItem = {
                name: recipeName,
                category,
                price: parseFloat(price),
                recipe: details,
                image: imageUrl
            };

            // Send the menu item data to backend
            const menuResponse = await axiosSecure.post('/menu', menuItem);

            if(menuResponse.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Item added Sucessfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

            // Resetting the form after submission
            Form.reset();
        } catch (error) {
            console.error('Error uploading image or submitting recipe:', error);
        }
    };

    return (
        <div>
            <SectionHeading subHeading={"What's New?"} heading={'Add An Item'} />
            <div className="flex items-center justify-center w-full">
                <form onSubmit={handleAddItems} className="bg-[#E8E8E8] p-4 rounded max-w-screen-lg w-full mb-4">
                    <div className="my-2">
                        <label className="block mb-2 text-lg font-medium text-gray-900">Recipe name*</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-3" name="recipeName" placeholder="Recipe name" required />
                    </div>
                    <div className="flex gap-3 w-full my-2">
                        <div className="flex-1">
                            <label className="block mb-2 text-lg font-medium text-gray-900">Category*</label>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-3" name="category" required>
                                <option className="text-gray-900" value="" disabled selected>Select category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-lg font-medium text-gray-900">Price*</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-3" name="price" placeholder="Price" required />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900">Recipe Details*</label>
                        <textarea rows="4" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300" name="details" placeholder="Recipe Details" required></textarea>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900">Upload Image</label>
                        <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-3" name="image" type="file" required />
                    </div>
                    <button className="flex items-center gap-2 p-3 mt-4 rounded text-lg font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Add Item <FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;