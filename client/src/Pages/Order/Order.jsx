import { useState } from "react"
import Cover from "../../Components/Cover/Cover"
import useMenu from "../../hooks/useMenu";
import Card from "../../Components/Card/Card";
import {Helmet} from 'react-helmet-async'

const Order = () => {
    const [selectedItem, setSelectedItem] = useState('salad');
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    /*
     * TODO: pegination 
     * 
     * 
     * 
     * */


    return (
        <div>
            <Helmet>
                <title>BistroBoss - Order Food</title>
            </Helmet>

            <Cover bgImg={'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'Order Food'} />
            {/* Tabs */}
            <ul className="flex items-center justify-center my-10 flex-wrap text-sm font-medium text-center text-gray-500">
                <li className="me-2">
                    <p onClick={() => setSelectedItem('salad')} className={`text-lg font-semibold p-3 border-b-4 cursor-pointer ${selectedItem === 'salad' ? 'text-[#D99904] border-[#D99904]' : 'text-[#151515] border-transparent hover:border-[#151515]'} transition-all`}>SALAD</p>
                </li>
                <li className="me-2">
                    <p onClick={() => setSelectedItem('pizza')} className={`text-lg font-semibold p-3 border-b-4 cursor-pointer ${selectedItem === 'pizza' ? 'text-[#D99904] border-[#D99904]' : 'text-[#151515] border-transparent hover:border-[#151515]'} transition-all`}>PIZZA</p>
                </li>
                <li className="me-2">
                    <p onClick={() => setSelectedItem('soup')} className={`text-lg font-semibold p-3 border-b-4 cursor-pointer ${selectedItem === 'soup' ? 'text-[#D99904] border-[#D99904]' : 'text-[#151515] border-transparent hover:border-[#151515]'} transition-all`}>SOUP</p>
                </li>
                <li className="me-2">
                    <p onClick={() => setSelectedItem('desserts')} className={`text-lg font-semibold p-3 border-b-4 cursor-pointer ${selectedItem === 'desserts' ? 'text-[#D99904] border-[#D99904]' : 'text-[#151515] border-transparent hover:border-[#151515]'} transition-all`}>DESSERT</p>
                </li>
                <li>
                    <p onClick={() => setSelectedItem('drinks')} className={`text-lg font-semibold p-3 border-b-4 cursor-pointer ${selectedItem === 'drinks' ? 'text-[#D99904] border-[#D99904]' : 'text-[#151515] border-transparent hover:border-[#151515]'} transition-all`}>DRINK</p>
                </li>
            </ul>

            {/* Tab Content*/}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 m-4">
                {selectedItem === 'salad' ? salad.map(item => <Card key={item._id} item={item} />) : ''}
                {selectedItem === 'pizza' ? pizza.map(item => <Card key={item._id} item={item} />) : ''}
                {selectedItem === 'soup' ? soup.map(item => <Card key={item._id} item={item} />) : ''}
                {selectedItem === 'desserts' ? desserts.map(item => <Card key={item._id} item={item} />) : ''}
                {selectedItem === 'drinks' ? drinks.map(item => <Card key={item._id} item={item} />) : ''}
            </div>
        </div>
    )
}

export default Order;