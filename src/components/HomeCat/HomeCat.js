import './HomeCat.scss';
import CatCard from '../CatCard/CatCard';
import Button from '../Button/Button';

const HomeCat = () => {
    return (
        <div className="HomeCat">
            <div className="container">
                <div className="HomeCat__in">
                    <h2 className="HomeCat__title section-title">
                        Категории
                    </h2>
                    <div className="HomeCat__body">
                        <div className="HomeCat__body_item">
                            <CatCard/>
                        </div>
                        <div className="HomeCat__body_item">
                            <CatCard/>
                        </div>
                        <div className="HomeCat__body_item">
                            <CatCard/>
                        </div>
                    </div>
                    <div className="HomeCat__action">
                        <Button variant={'warning'} text={'Все категории'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCat;

