import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/Images/home/01.jpg'
import slider2 from '../../assets/Images/home/02.jpg'
import slider3 from '../../assets/Images/home/03.png'
import slider4 from '../../assets/Images/home/04.jpg'
import slider5 from '../../assets/Images/home/05.png'
import slider6 from '../../assets/Images/home/06.png'

const Banner = () => {
    return (
        <section>
            <Carousel autoPlay={true} infiniteLoop={true} interval={2500}>
                <div>
                    <img src={slider1} alt="banner_image"/>
                </div>
                <div>
                    <img src={slider2} alt="banner_image"/>
                </div>
                <div>
                    <img src={slider3} alt="banner_image"/>
                </div>
                <div>
                    <img src={slider4} alt="banner_image"/>
                </div>
                <div>
                    <img src={slider5} alt="banner_image"/>
                </div>
                <div>
                    <img src={slider6} alt="banner_image"/>
                </div>
            </Carousel>
        </section>
    )
}

export default Banner