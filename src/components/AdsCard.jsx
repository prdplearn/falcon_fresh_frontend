

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const AdsCard = ({ item }) => {
    return (
        <div className="w-full bg-[#F8F0DB] py-12 px-3 rounded-xl" style={{background:item.adsColor}}>
            <div className="flex gap-6 justify-between">
                {/* Text Section */}
                <div className="text pl-3 w-[50%] flex flex-col gap-3">
                    <h2 className='text-[24px] font-medium' style={{width:item.isOne}}>{item.name}</h2>
                    <p className='text-sm  text-black font-medium'>
                        AED {item.price}
                        <span className='line-through pl-2 text-[#6a6a6a]'>AED {item.salePrice}</span>
                    </p>
               
                    <div className='mt-4'>
                    <Button className="rounded-full bg-[--Teal] inline-block">Shop Now</Button>
                    </div>
                
                </div>

                {/* Image Section */}
                <div className="img w-[50%] text-right">
                    <Image
                        src={item.productImage} // Dynamically set image source
                       
                        height={150}
                        alt={item.name} // Use item.name for alt text
                        layout="intrinsic" // This ensures the image maintains a natural aspect ratio
                    />
                </div>
            </div>
        </div>
    )
}

export default AdsCard
