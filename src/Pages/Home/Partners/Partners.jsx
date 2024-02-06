import Marquee from "react-fast-marquee";
import PartnerImages from "../../../Components/PartnerImages/PartnerImages";
import PartnerImagesBelow from "../../../Components/PartnerImages/PartnerImagesBelow";

const Partners = () => {
    return (
        <div className="h-[540px] flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold text-center py-2">Our Clients</h1>
            
            <Marquee pauseOnHover gradient>
                <PartnerImages></PartnerImages>
            </Marquee>
            <Marquee pauseOnHover gradient direction="right">
                <PartnerImagesBelow></PartnerImagesBelow>
            </Marquee>
            
        </div>
    );
};

export default Partners;