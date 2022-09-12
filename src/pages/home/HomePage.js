import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeCat from "../../components/HomeCat/HomeCat";
import Ribbon from "../../components/Ribbon/Ribbon";
import Fb from '../../components/Fb/Fb';
import Footer from "../../components/Footer/Footer";

import dataService from "../../services/dataService";
import { useEffect, useState } from "react";
import Adv from "../../components/Adv/Adv";
const ds = new dataService();


const HomePage = () => {

    return (
        <div className="HomePage body-part">
            <Hero/>
            <Adv/>
            <HomeCat/>
            <Ribbon spv={4} spb={0} title={'Наши популярные продукты'} type='products'/>
            <Ribbon spv={3} spb={8} title={'Статьи'} type='articles'/>
            <Fb/>
        </div>
    )
}


export default HomePage;