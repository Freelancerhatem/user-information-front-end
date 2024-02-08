import img1 from '../../assets/partner/p1.png'
import img2 from '../../assets/partner/p2.png'
import img3 from '../../assets/partner/p3.png'
import img4 from '../../assets/partner/p4.png'
import img5 from '../../assets/partner/p5.png'
import img6 from '../../assets/partner/p7.png'
import img7 from '../../assets/partner/p8.png'


const PartnerImagesBelow = () => {
    return (
        <div className='flex gap-32'>
            <img className='w-20' src={img1} alt="" />
            <img className='w-20' src={img2} alt="" />
            <img className='w-20' src={img3} alt="" />
            <img className='w-20' src={img4} alt="" />
            <img className='w-20' src={img5} alt="" />
            <img className='w-20' src={img6} alt="" />
            <img className='w-20' src={img7} alt="" />
            
            
        </div>
    );
};

export default PartnerImagesBelow;