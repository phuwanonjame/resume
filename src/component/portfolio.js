import React from 'react'
import { Element } from "react-scroll";
function Portfolio() {
  return (
    <Element name='portfolio' className=" pt-20 max-md:pt-10 max-sm:p-5 max-sm:h-[180%]  max-md:h-[100%]  bg-black h-screen ">
        <div className='flex justify-center items-center'>
            <h1 className='text-white text-6xl '><span className='text-red-500 text-6xl'>Post</span>forlio</h1>
        </div>
        <div className=' flex justify-center items-center mt-10'>
            <div className=' grid grid-cols-3 max-md:gap-3 gap-10 max-md:grid-cols-2'>
            <div class='   cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'>
                <img src='https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-coding-professional-hoodie_117038-5487.jpg' className='w-64 rounded-md' alt=''></img>
                <p className='text-white text-center mt-2'>Physical-Inventory</p>
                <p className='text-white text-center text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
           </p>
           <p className='text-white text-opacity-50 text-xs mt-5 '>reactjs,tailwindcss</p>


            </div>
            <div class= ' cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'>
                <img src='https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg' className='w-64 rounded-md' alt=''></img>
                <p className='text-white text-center mt-2'>Contractor-Manage-SyStem
</p>
                <p className='text-white text-center text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
           </p>
           <p className='text-white text-opacity-50 text-xs mt-5 '>reactjs,tailwindcss</p>


            </div>
           <div class= 'cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'>
                <img src='https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg' className='w-64 rounded-md' alt=''></img>
                <p className='text-white text-center mt-2'>Physical-Inventory</p>
                <p className='text-white text-center text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
           </p>
           <p className='text-white text-opacity-50 text-xs mt-5 '>reactjs,tailwindcss</p>

            </div>
          <div class='cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'>
                <img src='https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-gamer-headphones_117038-7596.jpg' className='w-64 rounded-md' alt=''></img>
                <p className='text-white text-center mt-2'>Physical-Inventory</p>
                <p className='text-white text-center text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
           </p>
           <p className='text-white text-opacity-50 text-xs mt-5 '>reactjs,tailwindcss</p>

            </div>
          <div class='cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]'>
                <img src='https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-ofiice-gamer_117038-5481.jpg' className='w-64 rounded-md' alt=''></img>
                <p className='text-white text-center mt-2'>Physical-Inventory</p>
                <p className='text-white text-center text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
           </p>
           <p className='text-white text-opacity-50 text-xs mt-5 '>reactjs,tailwindcss</p>

            </div>
            </div>
            
        </div>
    </Element>
  )
}

export default Portfolio