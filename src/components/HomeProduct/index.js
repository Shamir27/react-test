import React from 'react';

const HomeProduct = ({ data }) => {
    return (
        <div className='w-full'>
            <div className='w-full bg-gray1 flex flex-col justify-center items-center relative'>
                <img src={data.image} className='w-full h-[320px] lg:h-[413px] object-cover' />
                {
                    data.hasDrag && 
                    <div className=' absolute bottom-[80px] left-[32px] w-[116px] h-[116px] rounded-full bg-primary flex justify-center items-center'>
                        <span className='text-black text-lg leading-[26px] font-normal font_powergrotesk'>DRAG</span>
                    </div>
                }
            </div>
            <h3 className='mt-[15px] font_articulat_medium text-lg leading-[26px] text-black font-medium'>{data.title}</h3>
            <p className='mt-[5px] text-[16px] leading-[26px] text-black'>{data.originPrice && <span className='mr-[7px] line-through font_articulat_medium font-medium'>£{data.originPrice}</span>}<span className='font_articulat font-normal'>£{data.price}</span></p>
            <p className='mt-[1px] font_articulat text-xs leading-[20px] tracking-[0.01em] text-black font-normal'>{data.desc}</p>
        </div>
    )
}

export default HomeProduct;