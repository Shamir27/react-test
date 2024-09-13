import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Top = () => {
    return (
        <div className="w-full h-[30px] hidden  sm:flex justify-center items-center bg-primary  px-5 md:px-10">
            <div className="w-full flex justify-between items-center max-w-screen-main">
                <span className="font_articulat_medium text-xs leading-5 font-medium text-black">Uncovers unique pieces</span>
                <div className="flex justify-center items-center gap-5">
                    <a className="font_articulat_medium text-xs leading-5 font-medium text-black">Blog</a>
                    <a className="font_articulat_medium text-xs leading-5 font-medium text-black">For makers</a>
                    <div className="flex justify-center items-center gap-2">
                        <span className="font_articulat_medium text-xs leading-5 font-medium text-black">£ GBP</span>
                        <FiChevronDown size={20} className={'text-black'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;


