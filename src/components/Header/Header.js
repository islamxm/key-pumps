import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import {
    PhoneFilled,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import IconButton from '../IconButton/IconButton';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__in">
                    <div className="Header__top">
                        <div className="container">
                            <div className="Header__top_in">
                                <Link to={'/'} className="Header__logo">
                                    <img src={logo} alt="KeyPumps"/>
                                </Link>
                                <a href="tel:" className="Header__tel">
                                    <span className="Header__tel_icon"><PhoneFilled /></span>
                                    <span className="Header__tel_val">+7 (964) 945 41 38</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="Header__main">
                        <div className="container">
                            <div className="Header__main_in">
                                <div className="Header__nav">
                                    {/* Navigation */}
                                    <Navigation/>
                                </div>
                                <div className="Header__search">
                                    {/* Search */}
                                    <Search/>
                                </div>
                                <div className="Header__action">
                                    {/* basket */}
                                    <Link to={'/'} className="Header__action_item">
                                        <IconButton afterIcon={<ShoppingCartOutlined />} text={'Корзина'}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Header;