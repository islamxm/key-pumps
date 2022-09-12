import './Search.scss';
import {
    SearchOutlined
  } from '@ant-design/icons';


  
const Search = () => {
    return (
        <div className="Search">
            <div className="Search__input">
                <input type="text" className='Search__input_el' placeholder='Поиск'/>
                <div className="Search__input_icon">
                <SearchOutlined />
                </div>
            </div>
        </div>
    )
}

export default Search;