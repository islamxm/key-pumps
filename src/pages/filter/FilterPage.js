import Filter from "../../components/Filter/Filter";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import './FilterPage.scss';
import FilterList from "../../components/FilterList/FilterList";
import Ribbon from '../../components/Ribbon/Ribbon';
import dataService from '../../services/dataService';
import { useEffect, useState } from "react";
import Fb from '../../components/Fb/Fb'; 
import { useParams } from "react-router-dom";
import useContent from "../../hooks/useContent";

const ds = new dataService();

const testCat = "категория 2";
const testFilters = ["Тест", "Sila"];


const FilterPage = () => {
    const {loading, view, setLoading, setView} = useContent();
    const [recentList, setRecentList] = useState([]);
    const {categoryTitle} = useParams();

    const [catProds, setCatProds] = useState([]);
    const [filtersList, setFiltersList] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    // получить данные по категории
    useEffect(() => {
        setLoading(true);
        ds.getProducts().then(res => setRecentList(res.posts?.slice(0, 10)))
        ds.getDetailCategory(categoryTitle).then(res => {
            console.log(res.post)
            setFiltersList(res.post?.filters);
            setCatProds(res.post?.categoryProducts);
        }).finally(_ => setLoading(false))

    }, [categoryTitle])
    

    // фильтровать
    useEffect(() => {
        setLoading(true)
        ds.getProductFilter(categoryTitle, selectedFilters).then(res => {
            // setCatProds(res?.posts)
            if(selectedFilters.length > 0) {
                setCatProds(res?.posts)
            } else {
                ds.getDetailCategory(categoryTitle).then(res => {
                    setCatProds(res.post?.categoryProducts);
                }).finally(_ => setLoading(false))
            }
            console.log(res);
        }).finally(_ => setLoading(false))
    }, [selectedFilters, categoryTitle])


    //сброс фильтров при изменении категории
    useEffect(() => {
        setSelectedFilters([]);
    }, [categoryTitle])


    // удалить фильтр из плашек
    const handleRemoveChip = (chip) => {
        setSelectedFilters(state => {
            return state.filter(item => item != chip);
        })
    }


    return (
        <div className="FilterPage body-part">
            <Breadcrumbs/>
            <div className="container">
                <div className="FilterPage__in">
                    <div className="FilterPage__head section-title">{categoryTitle} <span>({catProds?.length > 0 ? catProds.length : 0})</span></div>
                    <div className="FilterPage__body">
                        
                        <Filter 
                            selected={selectedFilters} 
                            selectFilters={setSelectedFilters} 
                            filters={filtersList}/>

                        
                        <FilterList 
                            loading={loading}
                            removeFilter={handleRemoveChip} 
                            chips={selectedFilters} 
                            list={catProds}/>

                    </div>
                    <Ribbon 
                        list={recentList} 
                        title={'Вы недавно просмотрели'} 
                        type={'products'} 
                        spv={4}/>
                </div>
            </div>
            <Fb/>
        </div>
    )
}

export default FilterPage;