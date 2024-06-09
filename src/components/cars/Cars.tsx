import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {ALL_CARS_QUERY} from "../../apollo/cars";
import './style/cars.scss';
import Car from "../car/Car";
import {ICar} from "../../inteface/types";
import Button from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../../store/slices/FavoriteSlice";
import Search from "../search/Search";
import SortCar from "../sortCar/SortCar";
import {RootState} from "../../store/store";

const Cars = () => {
    const ItemId = useSelector((state: RootState) => state.favorite.activeItems) || [];
    const dispatch = useDispatch();
    const {data, loading, error} = useQuery(ALL_CARS_QUERY);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortedCars, setSortedCars] = useState<ICar[]>([]);

    const handleSearch = (term: string): void => {
        setSearchTerm(term);
    };
    const handleSort = (sorted: ICar[]): void => {
        setSortedCars(sorted);
    };

    const toggleFavorite = (item: ICar): void => {
        if (ItemId.includes(item.id)) {
            dispatch(removeFavorite(item.id));
        } else {
            dispatch(addFavorite(item));
        }
    };

    if (!data || !data.cars) return <p>No data available</p>;

    const filteredCars = (sortedCars.length ? sortedCars : data.cars).filter((car: ICar) =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;


    return (
        <div>
            <div className='header_config_container'>
                <div>
                    <SortCar cars={data.cars} onSort={handleSort}/>

                </div>
                <div>
                    <Search onSearch={handleSearch}/>

                </div>
            </div>

            <Car>
                <div className="car_container">
                    {filteredCars.map((item: ICar) => (
                        <div key={item.id} className='car_container_block'>
                            <ul>
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
                                <li className='car_container_truncate'>
                                    <h3>{item.brand} {item.model}</h3>
                                </li>
                                <li className='car_container_info'>
                                    <span>Год: {item.model_year}</span>
                                    <span>Цвет: {item.color}</span>
                                </li>
                                <li className='car_container_price'>
                                    <h4>от {item.price}</h4>
                                </li>
                            </ul>
                            <div className='car_container_btn_box'>
                                <div className='car_container_btn'>
                                    {item.availability ?
                                        <Button title={'Купить'} condition={'default'}/>
                                        :
                                        <Button title={'Купить'} condition={'disable'} disabled={true}/>
                                    }
                                </div>
                                {item.availability ?
                                    <div
                                        className={`car_container_favorite_logo${ItemId.includes(item.id) ? '_active' : ''}`}
                                        onClick={() => toggleFavorite(item)}>
                                    </div>
                                    :
                                    <div className='car_container_favorite_logo_availability'></div>}
                            </div>
                        </div>
                    ))}
                </div>
            </Car>
        </div>
    );
};

export default Cars;
