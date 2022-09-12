import './CatCard.scss';
import Button from '../Button/Button';
import img from '../../assets/cat-img.png'
import { Link } from 'react-router-dom';

const CatCard = ({name, image, link}) => {

    return (
        <div className="CatCard">
            <div className="CatCard__img">
                <img src={img} alt="" />
            </div>
            <div className="CatCard__body">
                <h3 className="CatCard__body_name">ТЕПЛОВЫЕ НАСОСЫ</h3>
                <div className="CatCard__body_action">
                    <Link to={'/'} className={'CatCard__body_action_item'}>
                        <Button text={'Перейти'} variant={'warning-tr'}/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default CatCard;