import './CatalogPage.scss';
import CatCard from "../../components/CatCard/CatCard";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import dataService from "../../services/dataService";
import { useEffect, useState } from "react";
const ds = new dataService();


const CatalogPage = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        ds.getCategories().then(res => {
            setCatalog(res.posts)
        })
    },[])



    return (
        <div className="CatalogPage body-part">
            <Breadcrumbs/>
            <div className="container">
                <div className="CatalogPage__in">
                    <h2 className="CatalogPage__head section-title">
                        Категории
                    </h2>
                    <div className="CatalogPage__body">
                        {
                            catalog?.length > 0 ? (
                                catalog.map((item, index) => (
                                    <div className="CatalogPage__body_item" key={index}>
                                        <CatCard 
                                            title={item.title}
                                            images={item.categoryImage?.photosLinks}
                                            link={item.title}
                                            />
                                    </div>
                                ))
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage;