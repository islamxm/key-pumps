import { Link } from "react-router-dom";
import './Navigation.scss';
import { Dropdown, Menu } from "antd";

const menuMore = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a href="#">
              пункт 1
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a href="#">
              пункт 2
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a href="#">
              пункт 3
            </a>
          ),
        },
      ]}
    />
  );


const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="Navigation__list">
                <li className="Navigation__item">
                    <Link to={'/'} className="Navigation__item_link">Главная</Link>
                </li>
                <li className="Navigation__item">
                    <Dropdown overlay={menuMore}>
                        <Link to={'/catalog'} className="Navigation__item_link Navigation__item_link-dr">Каталог</Link>
                    </Dropdown>
                </li>
                <li className="Navigation__item">
                    <Link to={'/about'} className="Navigation__item_link">О нас</Link>
                </li>
                <li className="Navigation__item">
                    <Dropdown overlay={menuMore}>
                        <Link to={'/'} className="Navigation__item_link Navigation__item_link-dr">Еще</Link>
                    </Dropdown>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;