import { Routes, Route, useLocation } from "react-router-dom";

import './App.scss';


import HomePage from "../pages/home/HomePage";
import FilterPage from "../pages/filter/FilterPage";
import AboutPage from "../pages/about/AboutPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductPage from "../pages/product/ProductPage";
import ArticlesPage from "../pages/articles/ArticlesPage";
import ArticlePage from "../pages/article/ArticlePage";
import FaqPage from "../pages/faq/FaqPage";
import DeliveryPage from "../pages/delivery/DeliveryPage";
import OrderPage from "../pages/order/OrderPage";


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Mobmenu from "../components/Mobmenu/Mobmenu";
import { useEffect, useRef } from "react";



const App = () => {

    const location = useLocation();
    const app = useRef()

    useEffect(() => {
        if(app.current) {          
            app.current.scrollTop = 0
        }
    }, [app, location])

    return (
        <div ref={app}  className="App">
           
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/catalog/:categoryTitle" element={<FilterPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/articles" element={<ArticlesPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/delivery" element={<DeliveryPage/>}/>
                <Route path="/faq" element={<FaqPage/>}/>
                <Route path="/order" element={<OrderPage/>}/>
                <Route path="/catalog/:category/:title" element={<ProductPage/>}/>
                <Route path="/articles/:article" element={<ArticlePage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;