import React from 'react';
import './style/car.scss'


interface CarProps {
    children: React.ReactNode;
}

const Car = ({children}: CarProps) => {

    return (
        <>
            {children}
        </>

    );
};

export default Car;