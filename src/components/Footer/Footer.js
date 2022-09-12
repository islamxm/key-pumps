import './Footer.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import soc1 from '../../assets/svg/vk.svg';
import soc2 from '../../assets/svg/twitter.svg';
import soc3 from '../../assets/svg/fb.svg';


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__main">
                <div className="container">
                    <div className="Footer__main_in">
                        <div className="Footer__main_part">
                            <Link to={'/'} className="Footer__main_logo">
                                <img src={logo} alt="" />
                            </Link>
                            <div className="Footer__main_soc">
                                <a href="#" className="Footer__main_soc_item">
                                    <img src={soc1} alt="" />
                                </a>
                                <a href="#" className="Footer__main_soc_item">
                                    <img src={soc2} alt="" />
                                </a>
                                <a href="#" className="Footer__main_soc_item">
                                    <img src={soc3} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Навигация</h3>
                            <ul className="Footer__main_list">
                                <li className="Footer__main_list_item"><a href="#">Главная</a></li>
                                <li className="Footer__main_list_item"><a href="#">Каталог</a></li>
                                <li className="Footer__main_list_item"><a href="#">Вопрос-ответ</a></li>
                                <li className="Footer__main_list_item"><a href="#">О нас</a></li>
                            </ul>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Наши контакты</h3>
                            <div className="Footer__main_link">
                                <div className="Footer__main_link_name">Телефоны</div>
                                <a href="tel:+79649454138" className="Footer__main_link_val">+7 (964) 945 41 38</a>
                            </div>
                            <div className="Footer__main_link">
                                <div className="Footer__main_link_name">Email</div>
                                <a href="mailto:info@keypumps.ru" className="Footer__main_link_val">info@keypumps.ru</a>
                            </div>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Наш адрес</h3>
                            <ul className="Footer__main_list">
                                <li className="Footer__main_list_item"><a href="#">
                                    Россия,<br></br>
                                    г. Сочи, ул. Горького, 87    
                                </a></li>
                            </ul>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Информация</h3>
                            <ul className="Footer__main_list">
                                <li className="Footer__main_list_item"><a href="#">Доставка и оплата</a></li>
                                <li className="Footer__main_list_item"><a href="#">Гарантии</a></li>
                                <li className="Footer__main_list_item"><a href="#">Возврат товара</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer__ex">
                <div className="container">
                    <div className="Footer__ex_in">
                    © 2022  All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;