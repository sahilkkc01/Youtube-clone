import React from 'react'

import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,

}from 'react-icons/md';

import {LuThumbsUp} from 'react-icons/lu'

export default function Sidebar() {
   const mainlinks = [
    {
        icon:<MdHomeFilled className='text-xl'/>,
        name:'Home'
    },
    {
        icon:<MdOutlineSlowMotionVideo className='text-xl'/>,
        name:'Shorts'
    },
    {
        icon:<MdSubscriptions className='text-xl'/>,
        name: 'Subscriptions'
    }
   ];

   const otherlinks=[
    {
        icon:<MdOutlineVideoLibrary className='text-xl'/>,
        name:'Library'
    },
    {
        icon:<MdHistory className='text-xl'/>,
        name:'History'
    },
    {
        icon:<MdOutlineWatchLater className='text-xl'/>,
        name:'Watch Later'
    },
     {
        icon:<LuThumbsUp className='text-xl'/>,
        name:'Liked Video'
     }
   ];

  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {/* //Writing js */}
        {
            mainlinks.map(
                ({icon,name})=>{
                    return(
                        // by defualt it show slat color on home
                        <li key={name} className={`py-3 pl-6 hover:bg-zinc-700 ${name ==='Home' ? 'bg-zinc-600' : " "} rounded-xl`}>
                            <a href="#" className='flex gap-5 items-center'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li> 
                    )
                }
            )
        }
      </ul>

      <ul className='flex flex-col border-b-1 border-gray-800'>
        {/* //Writing js */}
        {
            otherlinks.map(
                ({icon,name})=>{
                    return(
                        // by defualt it show slat color on home
                        <li key={name} className={`py-3 pl-6 hover:bg-zinc-700 ${name ==='Home' ? 'bg-slate-600' : " "} rounded-xl`}>
                            <a href="#" className='flex gap-5 items-center'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li> 
                    )
                }
            )
        }
      </ul>
    </div>
  )
}
