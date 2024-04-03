import React from 'react'
import { GoHome } from "react-icons/go";
import { RiPercentLine,
    RiPieChartLine,
    RiMailLine,
    RiNotification3Line,
    RiSettings4Line,
    RiLogoutCircleRLine, } from "react-icons/ri";
    import logo from '../../assets/homefoodd-transformed.png'

const Sidebar = () => {
  return (
    <div className= "bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl">
      <div><img src={logo} alt="Home Food Logo" /> </div>
        <div>
      <ul className='pl-4'>
        <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'> 
            <a href="#" className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
            <GoHome className='text-2xl' /></a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'> 
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            <RiPercentLine className='text-2xl'/></a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'> 
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            <RiPieChartLine className='text-2xl'/></a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'> 
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            <RiMailLine className='text-2xl'/></a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'> 
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            <RiNotification3Line className='text-2xl'/></a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'> 
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            <RiSettings4Line className='text-2xl'/></a>
        </li>
      </ul>
      </div>
      <div>
        <ul className='pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'> 
            <a href="#" className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
            <RiLogoutCircleRLine className='text-2xl'/></a>
        </li>
        </ul>
      </div>
    </div>
  )
}




export default Sidebar

