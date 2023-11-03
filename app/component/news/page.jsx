import React from 'react'
import Link from 'next/link'

function news() {
  return (
    <>
    <section className='ps-6 md:flex md:pt-24 md:pb-32  '> 

        <div className=' w-2/3 ms-12 '>
            <h1> <span className='font-bold'>News</span> <span>All News</span></h1>
            <div className='flex  pt-5 pb-10 '>
            <div className='md:flex gap-6 '>
            <Link className='hover:bg-gray-400' href='/'>
            <img
            src={"https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Promo-Facebook-Facebook%20link%20image%20%281%29_0.jpeg?itok=9pg-nQ0V"}
            />
            <h2>Risks, regulation - but opportunities too: AI is thriving in the UK, say experts</h2>
            </Link>
            <Link className='hover:bg-gray-400' href='/'>
            <img
            src={"https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/AI%20future.jpg?itok=pUTOTqPT"}
            />
           
            <h2>Expert Comment: Leading AI nations convene for day one of the UK AI Summit</h2>
            
            </Link>
            <Link className='hover:bg-gray-400' href='/'>
            <img
            src={"https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Promo-Facebook-Facebook%20link%20image%20%281%29_0.jpeg?itok=9pg-nQ0V"}
            />
            <h2>Expert Comment: Leading AI nations convene for day one of the UK AI Summit</h2>
            </Link>
            </div>
            
        </div>

        </div>

        <div className='ms-12 '>
            <h1> <span className='font-bold'>Event</span> <span>All Event</span></h1>

            <div className='py-4'>
                <div className='flex gap-3 py-3 h-20 w-auto hover:bg-green-100 '>
                    <div className='bg-red-600 rounded-md w-10 h-auto '>
                    03 Nov
                    </div>
                    <h2>একাদশ শ্রেণির ২০২৩-২০২৪ লাইব্রেরী হতে বই সংগ্রহ করতে...</h2>
                </div>
                <div className='flex gap-3 py-3 h-20 w-auto hover:bg-blue-100'>
                    <div className='bg-red-600 rounded-md '>
                    02 Nov
                    </div>
                    <h2>সংগীত ক্লাস সংক্রান্ত বিজ্ঞপ্তি...</h2>
                </div>
                <div className='flex gap-3 py-3 h-20 w-auto hover:bg-red-100'>
                    <div className='bg-red-600 rounded-md '>
                   03 Nov
                    </div>
                    <h2>একাদশ শ্রেণির ২০২৩-২০২৪ লাইব্রেরী হতে বই সংগ্রহ করতে...</h2>
                </div>
                
            </div>
        </div>
    </section>

    </>
  )
}

export default news