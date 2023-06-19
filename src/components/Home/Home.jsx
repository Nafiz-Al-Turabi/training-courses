import React from 'react';
import Banner from '../Banner/Banner';
import Motivated from '../HomeComponents/Motivated';
import CourseKit from '../HomeComponents/CourseKit';
import TopCategories from '../HomeComponents/TopCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Motivated></Motivated>
            <CourseKit></CourseKit>
            <TopCategories></TopCategories>
        </div>
    );
};

export default Home;