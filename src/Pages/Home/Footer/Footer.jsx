

const Footer = () => {
    return (
        <div>
            <div className="px-10  bg-black h-[calc(100vh-420px)] text-white  grid grid-cols-4">
                <div className=" pt-5 flex flex-col gap-5">
                    <h1 className="text-xl font-semibold">Get in Touch</h1>
                    <div className="space-y-2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, vel.</p>
                        <p>Gmail</p>
                        <p>Number</p>
                    </div>
                </div>
                <div className=" flex items-start justify-center pt-5 ">
                    <nav className="flex flex-col justify-center">
                        <h2 className="text-xl font-semibold">Company</h2>
                        <ul className="flex flex-col justify-center gap-2 mt-20">
                            <li>About Us</li>
                            <li>Our Office</li>
                            <li>Privacy Policy</li>
                            <li>About Us</li>
                            <li>Our Office</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </nav>
                </div>
                <div className=" flex items-start justify-center pt-5 ">
                    <nav className="flex flex-col justify-center">
                        <h2 className="text-xl font-semibold">Services</h2>
                        <ul className="flex flex-col justify-center gap-2 mt-20">
                            <li>About Us</li>
                            <li>Our Office</li>
                            <li>Privacy Policy</li>
                            <li>About Us</li>
                            <li>Our Office</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </nav>
                </div>
                <div className=" flex items-start justify-center pt-5 ">
                    <nav className="flex flex-col justify-center">
                        <h2 className="text-xl font-semibold">Company</h2>
                        <ul className="flex flex-col justify-center gap-2 mt-20">
                            <li>About Us</li>
                            <li>Our Office</li>
                            <li>Privacy Policy</li>
                            <li>About Us</li>
                            <li>Our Office</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div className="h-10 bg-gray-200 flex items-center justify-center">
                <p className="">copyright usernest.com 2023-2024 </p>
            </div>
        </div>
    );
};

export default Footer;