import './Article.scss';
import { Link } from 'react-router-dom';
import img from '../../assets/art-img.png';

const Article = ({name, image, category, date}) => {

    return (
        <Link to={'/'} className="Article">
            <div className="Article__img">
                <img src={img} alt="" />
            </div>
            <div className="Article__body">
                <div className="Article__body_name">
                МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА
                </div>
                <div className="Article__body_action">
                    <div className="Article__body_action_cat">СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</div>
                    <div className="Article__body_action_date">9 апреля 2022</div>
                </div>
            </div>
        </Link>
    )
}

export default Article;