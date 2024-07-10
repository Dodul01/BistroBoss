import { FaUtensils } from "react-icons/fa"
import SectionHeading from "../../../../Components/SectionHeading/SectionHeading"

const AddItem = () => {
    return (
        <div>
            <SectionHeading subHeading={"What's New?"} heading={'Add An Item'} />
            <div className="flex items-center justify-center w-full">

                <form className="bg-[#E8E8E8] p-4 rounded max-w-screen-lg w-full mb-4">
                    <div className="my-2">
                        <label className="block mb-2 text-lg font-medium text-gray-900">Recipe name*</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-3" placeholder="Recipe name" />
                    </div>
                    <div className="flex gap-3 w-full my-2">
                        <div className="flex-1">
                            <label className="block mb-2 text-lg font-medium text-gray-900">Category*</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-3">
                                <option className="text-gray-900" selected>Category</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-lg font-medium text-gray-900">Price*</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-3" placeholder="Price" />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900">Recipe Details*</label>
                        <textarea rows="4" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Recipe Details"></textarea>
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900">Upload Image</label>
                        <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-3" type="file" />
                    </div>
                    <button className="flex items-center gap-2 p-3 mt-4 rounded text-lg font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Add Item <FaUtensils /></button>
                </form>
            </div>
        </div>
    )
}

export default AddItem