import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

Link

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center w-[92%] mx-auto  font-bold bg-fixed' >
        <div>
          <Link href='/'>
          <Image
            src={'https://ems-files.softbd.xyz/thakurgaongovtcollege/images/institute_img/logo.jpg'}

            height={60}
            width={60}
          />
          
          </Link>
        </div>
        <div className='nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
          <div className=''>
          <Link className='p-5' href='/'>
          Home
          </Link>
          <Link className='p-5' href='/'>
          About
          </Link>
          <Link className='p-5' href='/'>
          News
          </Link>
          
        </div>
          </div>
        
        <div class="flex items-center gap-6">
                <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
      </nav>
    </div>
  )
}

export default Navbar