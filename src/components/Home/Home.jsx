import React from 'react';
import Banner from '../Banner/Banner';
import Motivated from '../HomeComponents/Motivated';
import CourseKit from '../HomeComponents/CourseKit';
import TopCategories from '../HomeComponents/TopCategories';
import TopCourse from '../HomeComponents/TopCourse';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Motivated></Motivated>
            <CourseKit></CourseKit>
            <TopCategories></TopCategories>
            <TopCourse></TopCourse>
        </div>
    );
};

export default Home;