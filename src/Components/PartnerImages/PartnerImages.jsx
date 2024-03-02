import img1 from '../../assets/partner/a- (1).png'
import img2 from '../../assets/partner/a- (2).png'
import img3 from '../../assets/partner/a- (3).png'
import img4 from '../../assets/partner/a- (4).png'
import img5 from '../../assets/partner/a- (5).png'
import img6 from '../../assets/partner/a- (6).png'
import img7 from '../../assets/partner/a- (7).png'
import img8 from '../../assets/partner/a- (8).png'
import img9 from '../../assets/partner/a- (9).png'
import img10 from '../../assets/partner/a- (10).png'

const PartnerImages = () => {
    const images = [img1, img2, img3,img4, img5, img6, img7, img8, img9, img10]
    return (
        <div className='flex md:gap-32 gap-5'>
            {
                images.map((image, index) => {
                   return <img className='w-10 md:w-20' key={index} src={image} alt="" />
                })
            }


        </div>
    );
};

export default PartnerImages;