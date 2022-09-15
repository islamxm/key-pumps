import { Routes, Route } from "react-router-dom";
import './App.scss';

import HomePage from "../pages/home/HomePage";
import FilterPage from "../pages/filter/FilterPage";
import AboutPage from "../pages/about/AboutPage";
import CatalogPage from "../pages/catalog/CatalogPage";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/filter/:categoryTitle" element={<FilterPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;