import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ICar} from "../../inteface/types";
import Button from "../../components/button/Button";
import Car from "../../components/car/Car";
import {removeFavorite} from "../../store/slices/FavoriteSlice";
import {RootState} from "../../store/store";

const Favorites: FC = () => {

    const dispatch = useDispatch();

    const removeItem = (id: number): void => {
        dispatch(removeFavorite(id))
    }

    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    return (
        <div>
            <Car>
                <div className="favorite_container_car">
                    {favorites.map((item: ICar) => (
                        <div key={item.id} className='car_container_block'>
                            <ul className='car_container_favorite_flex'>
                                <li className='car_container_logo'>
                                    {item.availability ?
                                        <img src={`http://localhost:4000${item.img_src}`} alt=""/>
                                        :
                                        <div className="car_container_availability">
                                            <img src={`http://localhost:4000${item.img_src}`} alt=""/>
                                            <h3>Нет в наличии</h3>
                                        </div>
                                    }
                                </li>
                                <div>
                                    <li className='car_container_truncate'>
                                        <h3>{item.brand} {item.model}</h3>
                                    </li>
                                    <li>
                                        {item.description}
                                    </li>
                                    <li>
                                        <span>Год: {item.model_year}</span>
                                    </li>
                                    <li>
                                        <span>Цвет: {item.color}</span>
                                    </li>
                                    <li className='car_container_price'>
                                        <h4>от {item.price}</h4>
                                    </li>
                                    <div className='car_container_btn_box_favorite'>
                                        <div className='car_container_btn'>
                                            <Button title={'Купить'} condition={'default'}/>
                                        </div>
                                        <div className='car_container_delete_logo'
                                             onClick={() => removeItem(item.id)}
                                        ></div>
                                    </div>
                                </div>
                            </ul>

                        </div>
                    ))}
                </div>
            </Car>
        </div>
    );
};

export default Favorites;