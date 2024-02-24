import bg from '../../../assets/bg_1.jpg';
const Banner = () => {
    return (
        <div className={`relative  h-[calc(100vh-80px)] top-20    bg-no-repeat bg-center bg-cover`} style={{ backgroundImage: `url(${bg})` }}>
        </div>
    );
};

export default Banner;