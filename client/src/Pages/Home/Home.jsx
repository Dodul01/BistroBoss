import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category';
import PopularMenu from '../../Components/PopularMenu/PopularMenu';
import Recommended from '../../Components/Recommended/Recommended';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Cover from '../../Components/Cover/Cover';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>BistroBoss - Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Cover bgImg={'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'BistroBoss'}/>
            <PopularMenu />
            <Recommended />
            <Testimonials />
        </div>
    )
}

export default Home