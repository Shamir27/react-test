import React from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import SvgLogo from '../../../assets/svgs/logo.svg';

const Navigation = () => {
    const leftLinks = [
        { label: 'LIFESTYLE', href: '#' },
        { label: 'FASHION', href: '#' },
        { label: 'HOMEWEAR', href: '#' },
        { label: 'ART', href: '#' },
        { label: 'DS COLLECTIONS', href: '#' },
    ];
    const rightLinks = [
        { label: 'SEARCH', href: '#' },
        { label: 'WISHLIST', href: '#' },
        { label: 'BASKET', href: '#' },
    ];
    return (
        <div className="w-full flex flex-col justify-center items-center py-[30px] max-w-screen-main relative">
            <div className="flex xl:hidden w-full mb-5 justify-center items-center">
                <div className="w-[24]" />
                <div className="flex-1 flex justify-center items-center">
                    <img src={SvgLogo} className={' w-[207px] h-[22px] object-contain '} />
                </div>
                <FiMenu size={24} className={'text-white flex main_md:hidden'} />
            </div>
            <div className="hidden main_md:flex w-full  justify-center items-center">
                <div className="flex-1 flex justify-start items-center gap-[30px]">
                    {
                        leftLinks.map(link =>
                            <a key={link.label} className="font_powergrotesk text-[14px] leading-[21px] tracking-[0.015em] font-normal text-white whitespace-nowrap">
                                {link.label}
                            </a>
                        )
                    }
                </div>
                <img src={SvgLogo} className={'hidden xl:flex w-[207px] h-[22px] object-contain'} />
                <div className="flex-1 flex justify-end items-center gap-[30px]">
                    {
                        rightLinks.map(link =>
                            <a key={link.label} className="font_powergrotesk text-[14px] leading-[21px] tracking-[0.015em] font-normal text-white whitespace-nowrap">
                                {link.label}
                            </a>
                        )
                    }
                    <div className="flex justify-center items-center gap-1">
                        <span className="font_powergrotesk text-[14px] leading-[21px] font-normal text-white">ACCOUNT</span>
                        <FiChevronDown size={20} className={'text-white'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;


