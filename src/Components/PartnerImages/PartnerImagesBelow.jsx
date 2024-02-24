import img1 from '../../assets/partner/p1.png'
import img2 from '../../assets/partner/p2.png'
import img3 from '../../assets/partner/p3.png'
import img4 from '../../assets/partner/p4.png'
import img5 from '../../assets/partner/p5.png'
import img6 from '../../assets/partner/p7.png'
import img7 from '../../assets/partner/p8.png'


const PartnerImagesBelow = () => {
    const images = [img1, img2, img3, img4, img4, img5, img5, img6, img7]
    return (
        <div className='flex gap-32'>


            {
                images.map((image,index)=><img key={index} className='w-20' src={image} alt="" />)
            }



        </div>
    );
};

export default PartnerImagesBelow;