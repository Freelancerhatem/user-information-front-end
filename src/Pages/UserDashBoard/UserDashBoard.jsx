import { useState } from "react";

const UserDashBoard = () => {
    const [active, setActive] = useState('address');

    return (
        <div className="mt-32">
            <div className="flex flex-col items-center">
                <h1 className="text-center text-2xl">Complete Your profile</h1>
                <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
            </div>
            <div className="flex justify-center gap-20  mt-12">
                <h2 onClick={() => setActive('address')} className={`border-b-2 cursor-pointer px-2  ${active == 'address' ? 'border-red-500' : 'border-red-100'}`}>Address</h2>
                <h2 onClick={() => setActive('passport')} className={`border-b-2 cursor-pointer px-2  ${active == 'passport' ? 'border-red-500' : 'border-red-100'}`}>Passport/Id</h2>
                <h2 onClick={() => setActive('others')} className={`border-b-2 cursor-pointer px-2  ${active == 'others' ? 'border-red-500' : 'border-red-100'}`}>Others</h2>
            </div>
            <div className="  px-20 gap-20 w-full justify-center">
                {
                    active == 'address' ?
                        <div>
                            <h2 className="text-xl font-bold">Present Address</h2>
                            <div className=" w-full grid grid-cols-2 gap-5">

                                <div className="flex flex-col ">
                                    <h2>Select Your Country</h2>
                                    <select defaultValue={'usa'} className=" bg-gray-200 rounded p-4 text-black  focus:outline-none" name="country" id="">
                                        <option value="usa">USA</option>
                                        <option value="bd">Bangladesh</option>
                                        <option value="ind">India</option>
                                        <option value="uae">UAE</option>
                                        <option value="uk">UK</option>
                                    </select>
                                </div>
                                <div className="flex flex-col ">
                                    <h2>Select Your State</h2>
                                    <select defaultValue={'newYork'} className="bg-gray-200 rounded p-4 text-black  focus:outline-none" name="country" id="">
                                        <option value="newYork">New York</option>
                                        <option value="california">California</option>
                                        <option value="">Alaska</option>
                                        <option value="uae">UAE</option>
                                        <option value="uk">UK</option>
                                    </select>
                                </div>

                            </div>
                            <div className="">
                                <div>
                                    <h2>Street Address</h2>
                                    <textarea name="stAddress" className="resize-none w-[calc(50%-10px)] bg-gray-200 rounded p-4 text-black  focus:outline-none" id="" ></textarea>
                                </div>

                                <div className="space-x-2">
                                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Save Changes</button>
                                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Cancel</button>
                                </div>
                            </div>
                        </div>
                        : active == 'passport' ?
                            <div>
                                <h2 className="text-xl font-bold">Personal Information</h2>
                                <div className=" w-full grid grid-cols-2 gap-5">


                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">Passport Front</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>


                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">Passport Back</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>


                                </div>
                                <div className="grid grid-cols-2 gap-5 ">
                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">NID Front</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>
                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">NID Back</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>

                                </div>

                                <div className="space-x-2 mt-5">
                                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Save Changes</button>
                                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Cancel</button>
                                </div>

                            </div>
                            :
                            <div>
                                <h2 className="text-xl font-bold">Others Information</h2>
                                <div className=" w-full grid grid-cols-2 gap-5">


                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">Mock  Video 1</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>


                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">Mock Video 2</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>


                                </div>
                                <div className="grid grid-cols-2 gap-5 ">
                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">Security Question?</label>
                                        
                                        <select name="" id="" className="bg-gray-200 rounded p-4 text-black  focus:outline-none">
                                            <option value="">Your Favorite Team?</option>
                                            <option value="">What is Your Grandmother Name?</option>
                                            <option value="">What is Your Born Year?</option>
                                        </select>
                                    </div>
                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">Answer:</label>
                                        <input type="text" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>

                                </div>
                                <div className="grid grid-cols-2 gap-5 ">
                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">NID Front</label>
                                        <input type="text" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>
                                    <div className="mt-5 flex flex-col">
                                        <label htmlFor="">NID Back</label>
                                        <input type="file" className="bg-gray-200 rounded p-4 text-black  focus:outline-none" />
                                    </div>

                                </div>

                                <div className="space-x-2 mt-5">
                                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Save Changes</button>
                                    <button className="px-4 py-2 bg-red-500 rounded-lg text-white">Cancel</button>
                                </div>

                            </div>
                }



            </div>
        </div>
    );
};

export default UserDashBoard;