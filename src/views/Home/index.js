import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Favourites from './Favourites';
import FeaturedMaker from './FeaturedMaker';
import LastestProducts from './LastestProducts';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <LastestProducts />
            <Categories />
            <FeaturedMaker />
            <Favourites />
        </div>
    )
}

export default Home;