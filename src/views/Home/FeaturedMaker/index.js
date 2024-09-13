import React from 'react';
import ImgFeatured from '../../../assets/images/featured.png';

const FeaturedMaker = () => {
    return (
        <div className='w-full mt-[40px] lg:mt-[87px] py-[40px] lg:py-[74px] px-5 md:px-10 flex flex-col justify-center items-center bg-cyan1'>
            <div className='w-full max-w-screen-main grid grid-cols-1 lg:grid-cols-10 relative'>
                <div className='col-span-4 '>
                    <div className='border-[1.5px] border-black rounded-[100px] w-[149px] h-[29px] flex justify-center items-center'>
                        <span className='font_powergrotesk text-sm leading-[21px] font-normal text-black uppercase'>FEATURED MAKER</span>
                    </div>
                    <h3 className='mt-[50px] lg:mt-[101px] font_powergrotesk text-3xl leading-[38px] lg:text-4xl lg:leading-[40px] tracking-[0.02em] font-medium text-black uppercase'>
                        Lorem ipsum dolor sit<br className='hidden md:flex'/> amet consectetur
                    </h3>
                    <p className='mt-[14px] mb-[25px] font_articulat text-lg leading-[28px] tracking-[0.01em] font-normal text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br className='hidden md:flex' /> Ut et massa mi. Aliquam in hendrerit urna. Pellentesque <br className='hidden md:flex'/>sit amet sapien fringilla, mattis ligula consectetur, <br className='hidden md:flex'/>ultrices mauris. Maecenas vitae mattis tellus.
                    </p>
                    <button className='bg-black w-[136px] h-[50px] rounded-[90px] flex justify-center items-center text-cyan1 font_articulat_medium text-sm leading-[22px] font-medium'>
                        View maker
                    </button>
                </div>
                <div className='col-span-6 flex justify-end items-center'>
                    <img src={ImgFeatured} className='w-[811px] h-[350px] lg:h-[550px] object-contain' />
                </div>
                <div className='absolute bottom-0 left-0 w-full flex justify-center lg:justify-start items-end gap-[6px]'>
                    <div className='border-t-[3px] border-black w-[30px]' />
                    <div className='border-t-[1px] border-[#00000032] w-[30px]' />
                    <div className='border-t-[1px] border-[#00000032] w-[30px]' />
                </div>
            </div>
        </div>
    )
}

export default FeaturedMaker;