import SectionHeading from "../SectionHeading/SectionHeading"
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionHeading heading={'Check It Out'} subHeading={'From Our Menu'} />

            <div className="grid md:grid-cols-2 gap-10 mx-4 mb-2">
                {popular.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
            <div className="flex items-center justify-center mb-10">
                <Link to="/order" class="py-2.5 px-5  me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-b-2 border-[#111827] hover:bg-[#111827] hover:text-[#BB8506] transition-all focus:z-10 focus:ring-4 focus:ring-gray-100">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </section>
    )
}

export default PopularMenu