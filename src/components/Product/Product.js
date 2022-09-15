import './Product.scss';
import { useEffect, useState } from 'react';
import placeholder from '../../assets/prod-pl.png';
import { Link } from 'react-router-dom';
import {ShoppingCartOutlined } from '@ant-design/icons';
import IconButton from '../IconButton/IconButton';
import Counter from '../Counter/Counter';
import {Swiper, SwiperSlide} from 'swiper/react';

const Product = ({
    category,
    description,
    details,
    displayMain,
    filters,
    id,
    inStock,
    initialPrice,
    price,
    linkedProducts,
    productImages,
    title}) => {


    const [count, setCount] = useState(0);

    const decHandle = () => {
        if(count > 0) {
            setCount(count => count - 1);
        } else {
            return;
        }
    }

    const incHandle = () => {
        if(count < 20) {
            setCount(count => count + 1);
        } else {
            return;
        }
    }




    return (
        <div className="Product">
            <div className="Product__badge">АКЦИЯ</div>
            <div className="Product__dsc">-9%</div>

            <Link to={'/'} className="Product__img">
                <Swiper
                    spaceBetween={10}>
                    {
                        productImages?.photosLinks?.length > 0 ? (
                            productImages.photosLinks.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item} alt="" />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <img src={placeholder} alt="" />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                {/* <img src={productImages?.photosLinks && productImages?.photosLinks.length > 0 ? productImages.photosLinks[0] : placeholder} alt="" /> */}
            </Link>
            <div className="Product__body">
                <Link to={'/'} className="Product__body_name">{title}</Link>
                <div className="Product__body_action">
                    <div className="Product__body_action_price">{price}₽</div>
                    <div className="Product__body_action_bsk">
                        {
                            count === 0 ? (
                                <IconButton onClick={incHandle} afterIcon={<ShoppingCartOutlined/>} onlyIcon={true} variant={'warning'}/>
                            ) : (
                                <Counter dec={decHandle} inc={incHandle} value={count}/>
                            )
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;