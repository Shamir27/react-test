import React from 'react';
import './index.css';
import Navigation from './Navigation';
import SvgEye from '../../../assets/svgs/eye.svg';

const Banner = () => {
    return (
        <div className='banner w-full pb-[40px] lg:pb-[90px] px-5 md:px-10 flex flex-col justify-center items-center'>
            <Navigation />
            <div className='w-full mt-[90px] md:mt-[120px] lg:mt-[180px] xl:mt-[260px] max-w-screen-main'>
                <img src={SvgEye} className={'w-[52px] h-[8px] object-contain'} />
                <h1 className='font_powergrotesk mt-[20px] lg:mt-[37px] text-3xl lg:text-5xl xl:text-6xl leading-[38px] lg:leading-[54px] xl:leading-[64px] tracking-[0.015em] font-normal text-white uppercase'>One-of-a-Kind Creations<br /> Stories You’ll Love</h1>
                <p className='font_articulat mt-[22px] text-lg leading-[26px] lg:text-xl lg:leading-[30px] tracking-[0.015em] font-normal text-white'>Designsnitch is an online marketplace that uncovers unique<br /> pieces, their makers and the stories behind them.</p>
                <div className='mt-[36px] flex justify-start items-center gap-[16px]'>
                    <button className='w-[180px] h-[40px] md:w-[205px] md:h-[50px]  whitespace-nowrap rounded-[90px] bg-primary font_articulat_medium text-sm leading-[22px] font-medium text-black'>Shop our latest arrivals</button>
                    <button className='w-[90px] h-[40px] md:w-[110px] md:h-[50px] whitespace-nowrap rounded-[90px] bg-black font_articulat_medium text-sm leading-[22px] font-medium text-primary'>Shop all</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;