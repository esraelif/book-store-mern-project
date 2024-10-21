import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import avatarImg from '../assets/news/avatar.png';

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
]
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const currentUser = true;
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className='flex justify-between items-center'>
                {/* {left side} */}
                <div className='flex items-center md:gap-16 gap-4'>
                    <Link to='/'><HiOutlineBars3CenterLeft className='size-6' /></Link>
                    {/* {search Input} */}
                    <div className='relative sm:w-72 w-40 space-x-2'>
                        <IoSearch className='absolute inline-block left-3 inset-y-2' />
                        <input type="text" placeholder='Search here' className="bg-[#AEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                    </div>
                </div>

                {/* { right side} */}
                <div className='relative flex items-center md:space-x-2'>
                    <div>

                        {currentUser ? <> <button onClick={() => setIsDropdownOpen(true)} >
                            <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                        </button>
                            {/* {show dropdown} */}

                            {
                                isDropdownOpen && (
                                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                        <ul className='py-2'>
                                            {
                                                navigation.map((item) => (
                                                    <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                        <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                )
                            }



                        </> : <Link to=' / login'> <LuUser2 className='size-6' /> </Link>}

                    </div>

                    <button className='hidden sm:block'>
                        <FiHeart className='size-6' />
                    </button>
                    <Link to='/cart' className=' bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                        <CgShoppingCart className='size-6' />
                        <span className='text-sm font-semibold sm:ml-1'>0</span>
                    </Link>


                </div>
            </nav >
        </header >
    );
}

export default Navbar;
