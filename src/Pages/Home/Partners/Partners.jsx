import Marquee from "react-fast-marquee";
import PartnerImages from "../../../Components/PartnerImages/PartnerImages";
import PartnerImagesBelow from "../../../Components/PartnerImages/PartnerImagesBelow";

const Partners = () => {
    return (
        <div className="md:h-[340px]  w-screen  md:px-10 flex flex-col justify-center  md:mt-0">
            <h1 className="md:text-3xl text-xl md:font-extrabold font-bold text-center py-2">Our Clients</h1>
            
            <Marquee pauseOnHover gradient>
                <PartnerImages></PartnerImages>
            </Marquee>
            <Marquee pauseOnHover gradient direction="right" className="mt-5">
                <PartnerImagesBelow></PartnerImagesBelow>
            </Marquee>
            
        </div>
    );
};

export default Partners;