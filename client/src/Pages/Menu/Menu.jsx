import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import MenuCategory from '../../Components/MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>BistroBoss - Menu</title>
            </Helmet>
            <Cover bgImg={'https://images.pexels.com/photos/2155561/pexels-photo-2155561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'Our Menu'} />
            
            {/* Offered Menu Items */}
            <div>
                <SectionHeading heading={"Today's Offer"} subHeading={"Don't Miss"} />
                <MenuCategory item={offered}/>
            </div>

            {/* Dessert Menu Items */}
            <div>
                <MenuCategory item={desserts} title={'Dessert'} coverImage={'https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
            </div>
            
            {/* Pizza Menu Items */}
            <div>
                <MenuCategory item={pizza} title={'Pizza'} coverImage={'https://images.pexels.com/photos/5848296/pexels-photo-5848296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
            </div>
            
            {/* Salad Menu Items */}
            <div>
                <MenuCategory item={salad} title={'Salad'} coverImage={'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
            </div>
            {/* Soup Menu Items */}
            <div>
                <MenuCategory item={soup} title={'Soup'} coverImage={'https://images.pexels.com/photos/5865282/pexels-photo-5865282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
            </div>
        </div>
    )
}

export default Menu