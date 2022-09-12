import './Product.scss';
import { useEffect, useState } from 'react';
import img from '../../assets/prod-img.png'
import { Link } from 'react-router-dom';

const Product = ({
    badge, 
    dsc, 
    name, 
    image, 
    price}) => {


    return (
        <div className="Product">
            <div className="Product__badge">АКЦИЯ</div>
            <div className="Product__dsc">-9%</div>

            <Link to={'/'} className="Product__img">
                <img src={img} alt="" />
            </Link>
            <div className="Product__body">
                <Link to={'/'} className="Product__body_name">ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1126</Link>
                <div className="Product__body_action">
                    <div className="Product__body_action_price">330 000₽</div>
                    <div className="Product__body_action_bsk"></div>
                </div>
            </div>
        </div>
    )
}

export default Product;