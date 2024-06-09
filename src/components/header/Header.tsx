import React, {FC} from 'react';
import './style/header.scss'
import Button from "../button/Button";
import {Link} from 'react-router-dom';


const Header: FC = () => {
    return (
        <div>
            <header className='container'>
                <ul className='header_container'>
                    <li>
                        <div className='header_container_logo'>
                            <div>
                                <Link to={'/'}><img src="../../../public/images/Frame%202.png  " alt=""/>
                                </Link>
                            </div>
                            <div><Button condition={'header'} title={'Каталог'}/></div>
                        </div>
                    </li>
                    <li>
                        <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
                        <span>+7 800 555 35 35</span>
                    </li>
                    <li className='header_container_favorite_box'>
                        <div className='header_container_favorite'></div>
                        <span>
                            <Link to={'/favorites'}>Избранное</Link>
                        </span>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;