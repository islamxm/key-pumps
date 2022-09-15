import './FilterList.scss';
import { Tag, Select } from 'antd';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import EmptyList from '../Placeholders/EmptyList/EmptyList';
import DefaultLoader from '../Loaders/DefaultLoader/DefaultLoader';
const {Option} = Select;

const View = ({loading, list}) => {
    if(loading) {
        return (
            <DefaultLoader/>
        )
    } else {
        return (

            list ? (
                list?.length > 0 ? (
                    list.map((item, index) => (
                        <div className="FilterList__body_item" key={item.product?._id}>
                            <Product 
                                price={item.product?.price}
                                title={item.product?.title}
                                productImages={item.images}/>
                        </div>
                    ))
                ) : <DefaultLoader/>
            ) : <EmptyList text={'Ничего не найдено'}/>
        )
    }
}

const FilterList = ({list, chips, removeFilter, loading}) => {



    return (
        <div className="FilterList">
            <div className="FilterList__top">
                <ul className="FilterList__top_list">
                    {
                        chips?.length > 0 ? (
                            chips.map((item, index) => (
                                <Tag className='FilterList__top_list_item' closable onClose={() => removeFilter(item)} color='gold' key={index}>{item}</Tag>
                            ))
                        ) : null
                    }
                    
                </ul>
                <div className="FilterList__top_sort">
                    <Select defaultValue={'first'}>
                        <Option value={'first'}>По пулярности</Option>  
                        <Option value={'second'}>По пулярности</Option>  
                        <Option value={'third'}>По пулярности</Option>  
                    </Select>
                </div>
            </div>
            <div className="FilterList__body">
                {
                    loading ? (
                        <DefaultLoader/>
                    ) : (
                        list?.length > 0 ? (
                            list.map((item, index) => (
                                <div className="FilterList__body_item" key={item.product?._id}>
                                    <Product 
                                        price={item.product?.price}
                                        title={item.product?.title}
                                        productImages={item.images}/>
                                </div>
                            ))
                        ) : <EmptyList text={'Ничего не найдено'}/>
                    )
                    
                }
                
                
            </div>
        </div>
    )
}


export default FilterList;
