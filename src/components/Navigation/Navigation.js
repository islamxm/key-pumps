import { Link } from "react-router-dom";
import './Navigation.scss';
import { Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import dataService from '../../services/dataService';

const ds = new dataService();


const Navigation = () => {
    const [catalogList, setCatalogList] = useState([]);

    useEffect(() => {
      ds.getCategories().then(res => {
        setCatalogList(res.posts);
      })
    }, [])

    return (
        <nav className="Navigation">
            <ul className="Navigation__list">
                <li className="Navigation__item">
                    <Link to={'/'} className="Navigation__item_link">Главная</Link>
                </li>
                <li className="Navigation__item">
                    <Dropdown overlay={
                      <ul className="Navigation__menu">
                        {
                          catalogList && catalogList.length > 0 ? (
                            catalogList.map((item,index) => (
                              <li className="Navigation__menu_item" key={index}><Link to={`/filter/${item.title}`}>{item.title}</Link></li>
                            ))
                          ) : null
                        }
                        
                      </ul> 
                    }>
                        <Link to={'/catalog'} className="Navigation__item_link Navigation__item_link-dr">Каталог</Link>
                    </Dropdown>
                </li>
                <li className="Navigation__item">
                    <Link to={'/about'} className="Navigation__item_link">О нас</Link>
                </li>
                <li className="Navigation__item">
                    <Dropdown overlay={
                      <ul className="Navigation__menu">
                        <li className="Navigation__menu_item"><a href="#">FAQ</a></li>
                        <li className="Navigation__menu_item"><a href="#">Доставка и оплата</a></li>
                        <li className="Navigation__menu_item"><a href="#">Статьи</a></li>
                      </ul>
                    }>
                        <Link to={'/'} className="Navigation__item_link Navigation__item_link-dr">Еще</Link>
                    </Dropdown>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;