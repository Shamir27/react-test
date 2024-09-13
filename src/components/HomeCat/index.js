import React from 'react';

const HomeCat = ({ data }) => {
    return (
        <div className='w-full h-[360px] lg:h-[536px] flex flex-col justify-center items-center' style={{ backgroundSize: 'cover', backgroundImage: `url(${data.image})` }}>
            <div className='h-[38px] md:h-[48px] px-[16px] rounded-[100px] text-center flex justify-center items-center bg-black font_powergrotesk tracking-[0.015em] text-[18px] md:text-[24px] leading-[24px] text-primary font-normal'>
                {data.title}
            </div>
        </div>
    )
}

export default HomeCat;