import './Ribbon.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import Product from '../Product/Product';
import { Scrollbar } from 'swiper';
import Article from '../Article/Article';

const Ribbon = ({title, spv, spb, list, type}) => {

    if(type == 'products') {
        return (
            <div className="Ribbon">
                <div className="container">
                    <div className="Ribbon__in">
                        <div className="Ribbon__head">
                            <h2 className="Ribbon__head_title section-title">{title}</h2>
                        </div>
                        <div className="Ribbon__body">
                            <Swiper
                                className='Ribbon__body_slider'
                                slidesPerView={spv}
                                spaceBetween={spb}
                                modules={[Scrollbar]}
                                scrollbar={{
                                    el: '.Ribbon__body_slider_scrollbar',
                                    draggable: true
                                }}
                                >
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Product/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Product/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Product/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Product/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Product/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Product/>
                                </SwiperSlide>
    
    
                                <div className="Ribbon__body_slider_scrollbar"></div>
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    if(type == 'articles') {
        return (
            <div className="Ribbon">
                <div className="container">
                    <div className="Ribbon__in">
                        <div className="Ribbon__head">
                            <h2 className="Ribbon__head_title section-title">{title}</h2>
                        </div>
                        <div className="Ribbon__body">
                            <Swiper
                                className='Ribbon__body_slider'
                                slidesPerView={spv}
                                spaceBetween={spb}
                                modules={[Scrollbar]}
                                scrollbar={{
                                    el: '.Ribbon__body_slider_scrollbar',
                                    draggable: true
                                }}
                                >
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Article/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Article/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Article/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Article/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Article/>
                                </SwiperSlide>
                                <SwiperSlide className='Ribbon__body_slider_sl'>
                                    <Article/>
                                </SwiperSlide>
    
    
                                <div className="Ribbon__body_slider_scrollbar"></div>
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default Ribbon;