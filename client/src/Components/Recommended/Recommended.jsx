import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading"
import Card from "../Card/Card";

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
                {menu.map(item => <Card key={item._id} item={item}/>)}
            </div>
        </div>
    )
}

export default Recommended