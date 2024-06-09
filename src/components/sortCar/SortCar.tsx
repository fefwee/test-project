import React, {FC, useState} from 'react';
import './style/sortCar.scss';
import {ICar} from "../../inteface/types";

interface SortCarProps {
    cars: ICar[]
    onSort: (sortedCars: ICar[]) => void;
}


const SortCar: FC<SortCarProps> = ({cars, onSort}) => {
    const arOptions = [
        'Сначала в наличии',
        'По имени (A-Z)',
        'По имени (Z-A)',
        'Сначала новее',
        'Сначала старше',
        'Сначала дешевле',
        'Сначала дороже'
    ];

    const [active, setActive] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(arOptions[0]);

    const toggleActive = () => setActive(!active);

    const handleOptionClick = (option: string): void => {
        setSelectedOption(option);
        setActive(false);
        sortCars(option);
    };

    const sortCars = (option: string): void => {
        let sorted = [...cars];
        switch (option) {
            case 'Сначала в наличии':
                sorted.sort((a, b) => Number(b.availability) - Number(a.availability));
                break;
            case 'По имени (A-Z)':
                sorted.sort((a, b) => a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1);
                break;
            case 'По имени (Z-A)':
                sorted.sort((a, b) => a.brand.toLowerCase() < b.brand.toLowerCase() ? 1 : -1);
                break;
            case 'Сначала новее':
                sorted.sort((a, b) => b.model_year - a.model_year);
                break;
            case 'Сначала старше':
                sorted.sort((a, b) => a.model_year - b.model_year);
                break;
            case 'Сначала дешевле':
                sorted.sort((a, b) => +a.price.replace('$', '') - +b.price.replace('$', ''));
                break;
            case 'Сначала дороже':
                sorted.sort((a, b) => +b.price.replace('$', '') - +a.price.replace('$', ''));
                break;
            default:
                break;
        }
        onSort(sorted);
    };


    return (
        <div className='sort_container'>
            <input type="text" onClick={() => toggleActive()} value={selectedOption} readOnly/>
            <div>
                <ul className={active ? 'active sort' : 'noactive sort'}>
                    {arOptions.map((item: string, index) => (
                        <li className='sort_item' key={index} onClick={() => handleOptionClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortCar;
