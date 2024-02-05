import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import HappyClients from "./HappyClients/HappyClients";
import Partners from "./Partners/Partners";


const Home = () => {


    return (
        <div>
            <div className="">
                <Banner></Banner>
            </div>
            <AboutUs></AboutUs>
            <Partners></Partners>
            <HappyClients></HappyClients>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;