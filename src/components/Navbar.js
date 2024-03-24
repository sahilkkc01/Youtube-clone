import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


export default function Navbar() {
  return (

    //main div
    <div className='flex justify-between px-14  h-14 items-center bg-[#212121] opacity-95 '>
        {/* //hambuger and youtube icon div */}
        <div className='flex gap-8 items-center text-2xl '>
            <div>
                <GiHamburgerMenu/>
            </div>
            <div className='flex gap-2 items-center justify-center'>
               <FaYoutube className='text-3xl text-red-600'/>
               <span className='text-2xl '>FitTech</span>
            </div>
        </div>

        {/* search bar and search icon div */}
            <div className='flex justify-center items-center gap-5'>

                <form action="">

                  <div className='flex bg-zinc-900 h-10 px-4 pr-0 rounded-3xl'>
                    <div className='flex items-center gap-5 pr-5'>
                      <input type="text" placeholder='search' className='w-96 bg-zinc-900 focus:outline-none border-none '/>
  
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                      <AiOutlineSearch className='text-xl l'/>
                      </button>
                  </div>
                </form> 
          
                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                <FaMicrophone />
                </div>
            </div>    

            {/* add video notifaction and account div*/}
                <div className='flex gap-5 item-center '>
                  {/* //className text-xl make icons larger */}
                  <RiVideoAddFill className='text-xl'/>
                  <div className='relative'>
                  <IoIosNotifications className='text-xl'/>
                  <span className='absolute bottom-2 left-3 text-xs bg-red-600 rounded-full px-1'>9+</span>
                  </div>
                  <MdAccountCircle className='text-xl'/>
                </div>
    </div>
  )
}
