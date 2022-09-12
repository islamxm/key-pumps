import './Fb.scss';
import Button from '../Button/Button';
import {PhoneFilled} from '@ant-design/icons';

const Fb = () => {
    return (
        <div className="Fb">
            <div className="container">
                <div className="Fb__in">
                    <div className="Fb__cb"><PhoneFilled style={{transform: 'scale(-1, 1)'}}/></div>
                    
                    <h2 className="Fb__title section-title">Мы Вам перезвоним</h2>
                    <div className="Fb__text">
                        Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
                    </div>
                    <form className="Fb__rw">
                        <div className="Fb__rw_item Fb__rw_item-inp">
                            <input type="text" placeholder='Ваше имя'/>
                        </div>
                        <div className="Fb__rw_item Fb__rw_item-inp">
                            <input type="text" placeholder='Ваш Email'/>
                        </div>
                        <div className="Fb__rw_item Fb__rw_item-btn">
                            <Button text={'Отправить'} variant={'warning'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Fb;