import icon from '../../../assets/img/ban-1.png'
const Banner = () => {
    return (
        <div className={`relative  md:h-[calc(100vh-80px)] h-[50vh] top-20  grid md:grid-cols-2 grid-cols-1 md:gap-5 justify-between items-center px-10 `}>

            <div className="">
                <h1 className="md:text-3xl text-[10px] font-extrabold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, reprehenderit?</h1>
                <p className="md:text-xl text-[6px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus sit doloremque quis voluptates. Aperiam, impedit quisquam? Laboriosam, dolores cumque! Non iste consequuntur placeat nulla at, totam voluptatem ipsa architecto.</p>
                <button className="md:px-5 px-1 py-[2px] text-[6px] md:py-2 bg-orange-300">See More</button>
            </div>
            {/*  */}
            <div>
                <img className='w-full' src={icon} alt="" />
            </div>

            {/*  */}
        </div>
    );
};

export default Banner;