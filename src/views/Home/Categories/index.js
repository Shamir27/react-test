import React from 'react';
import ImgCat1 from '../../../assets/images/categories/1.png';
import ImgCat2 from '../../../assets/images/categories/2.png';
import ImgCat3 from '../../../assets/images/categories/3.png';
import ImgCat4 from '../../../assets/images/categories/4.png';
import HomeCat from '../../../components/HomeCat';

const Categories = () => {
    const data = [
        { id: 1, image: ImgCat1, title: 'LIFESTYLE' },
        { id: 2, image: ImgCat2, title: 'FASHION' },
        { id: 3, image: ImgCat3, title: 'HOMEWEAR' },
        { id: 4, image: ImgCat4, title: 'ART' },
    ];
    return (
        <div className='w-full mt-[40px] lg:mt-[90px] px-5 md:px-10 flex flex-col justify-center items-center'>
            <div className='w-full max-w-screen-main'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='font_powergrotesk text-lg leading-[22px] lg:text-2xl lg:leading-[28px] tracking-[0.02em] font-semibold text-black uppercase'>Shop by Category</h3>
                    <a className='font_articulat_medium text-sm leading-[22px] font-medium text-black underline'>Browse all</a>
                </div>
                <div className='mt-[25px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[2px]'>
                    {
                        data.map(item => <HomeCat key={item.id} data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories;