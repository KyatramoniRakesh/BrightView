import React from 'react'
import './appComponents/globalStyle.css';
import Navbar from './appComponents/Navbar';
import Banner from './appComponents/Banner';
import AboutUs from './appComponents/AboutUs';
import Services from './appComponents/Services';
import SpecialistsAndNews from './appComponents/Specialists';
import Testimonial from './appComponents/Testimonials';
// import AllServices from './appComponents/AllServices/AllServices';
import Footer from './appComponents/Footer'
import Map from './appComponents/Map';


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutUs />
            <Services />
            <SpecialistsAndNews />
            <Testimonial />
            <Map/>
            <Footer/>
        </>
    )
}
export default Home;
