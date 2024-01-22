import bgimg from '../../../assets/contactbg.jpg'

const Contact = () => {
    return (
        <div name='contact' className=" h-screen bg-cover bg-center bg-fixed  " style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='h-screen bg-[#00000096] inset-0    '>


                <h1 className="text-3xl font-bold pt-5 text-center text-red-500">Contact us</h1>

                <div className="px-20">
                    <div className="flex flex-col text-white">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="bg-gray-200 p-2 text-black rounded-md w-[30%] focus:border-l-4 border-red-500 focus:outline-none" />
                    </div>
                    <div className="flex flex-col text-white">
                        <label htmlFor="name">Email</label>
                        <input type="email" required className="bg-gray-200 p-2  text-black rounded-md w-[30%] focus:border-l-4 border-red-500 focus:outline-none" />
                    </div>
                    <div className="flex flex-col text-white">
                        <label htmlFor="name">Number</label>
                        <input type="number" required className="bg-gray-200 p-2  text-black rounded-md w-[30%] focus:border-l-4 border-red-500 focus:outline-none" />
                    </div>
                    <div className="flex flex-col text-white">
                        <label htmlFor="name">Message</label>
                        <textarea type="text" required className="bg-gray-200 px-2 py-1  h-32  text-black rounded-md w-[30%] focus:border-l-2 border-red-500 resize-none focus:outline-none"></textarea>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;