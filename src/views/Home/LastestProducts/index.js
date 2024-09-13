import React from 'react';
import ImgProduct1 from '../../../assets/images/products/1.png';
import ImgProduct2 from '../../../assets/images/products/2.png';
import ImgProduct3 from '../../../assets/images/products/3.png';
import ImgProduct4 from '../../../assets/images/products/4.png';
import HomeProduct from '../../../components/HomeProduct';

const LastestProducts = () => {
    const data = [
        { id: 1, image: ImgProduct1, title: 'Jug Vase', price: 300, originPrice: 400, desc: 'Sold by Maker 1' },
        { id: 2, image: ImgProduct2, title: 'Erya Cutting Board', price: 35, desc: 'Sold by Maker 1' },
        { id: 3, image: ImgProduct3, title: '3 Legged Stool', price: 189, desc: 'Sold by Maker 1' },
        { id: 4, image: ImgProduct4, title: 'Mirage Tapestry Blanket', price: 295, desc: 'Sold by Maker 1' },
    ];
    return (
        <div className='w-full mt-[40px] lg:mt-[87px] px-5 md:px-10 flex flex-col justify-center items-center'>
            <div className='w-full max-w-screen-main'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='font_powergrotesk text-lg leading-[22px] lg:text-2xl lg:leading-[28px] tracking-[0.015em] font-semibold text-black uppercase'>Latest Products</h3>
                    <a className='font_articulat_medium text-sm leading-[22px] font-medium text-black underline'>Browse all</a>
                </div>
                <div className='mt-[27px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[2px]'>
                    {
                        data.map(item => <HomeProduct key={item.id} data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default LastestProducts;