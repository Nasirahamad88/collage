"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi';



const Navbar = () => {
  const onToggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('.menu-icon');
    if (icon.name === 'menu') {
      icon.name = 'close';
      navLinks.classList.toggle('top-[9%]');
    } else {
      icon.name = 'menu';
      navLinks.classList.toggle('top-[9%]');
    }
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
          />
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] hidden">
            Sign in
          </button>
          <FiMenu 
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden menu-icon "
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


// function Navbar() {

//   return (
//     <div>
//       <nav className='flex justify-between items-center w-[92%] mx-auto  font-bold bg-fixed' >
//         <div>
//           <Link href='/'>
//           <Image
//             src={'https://ems-files.softbd.xyz/thakurgaongovtcollege/images/institute_img/logo.jpg'}

//             height={60}
//             width={60}
//           />
          
//           </Link>
//         </div>
//         <div className='nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
//           <div className=''>
//           <Link className='p-5' href='/'>
//           Home
//           </Link>
//           <Link className='p-5' href='/'>
//           About
//           </Link>
//           <Link className='p-5' href='/'>
//           News
//           </Link>
          
//         </div>
//           </div>
        
//         <div class="flex items-center gap-6">
//                 <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
//                 <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
//             </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar