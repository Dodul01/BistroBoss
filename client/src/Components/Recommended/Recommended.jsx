import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading"
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Recommended = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category == 'popular')
                setMenu(popular)
            })
    }, [])

    return (
        <div className="mb-10 mx-4">
            <SectionHeading heading={'Chef Recommends'} subHeading={'Should Try'} />

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                {menu.map(item => <Card key={item._id} item={item} />)}
            </div>
            <div className="flex items-center justify-center mb-10 mt-3">
                <Link to="/order" class="py-2.5 px-5  me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-b-2 border-[#111827] hover:bg-[#111827] hover:text-[#BB8506] transition-all focus:z-10 focus:ring-4 focus:ring-gray-100">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    )
}

export default Recommended