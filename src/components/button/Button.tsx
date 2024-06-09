import React, {FC, useEffect, useState} from "react";
import './style/btn.scss';

interface ButtonProps {
    title?: string;
    condition?: string;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({title = 'купить', condition, disabled}) => {
    const [stateBtn, setStateBtn] = useState<JSX.Element | null>(null);

    useEffect(() => {
        switch (condition) {
            case 'default':
                setStateBtn(
                    <button className='default'>{title}</button>
                );
                break;
            case 'header':
                setStateBtn(
                    <button className='default default_header'>
                        <div className="btn_icon">
                            <img src="../../../public/images/Burger1.png" alt=""/>
                        </div>
                        {title}
                    </button>
                );
                break;
            case 'disable':
                setStateBtn(
                    <button className='disable' disabled={disabled}>{title}</button>
                );
                break;
            default:
                setStateBtn(null);
        }
    }, [condition, title, disabled]);

    return (
        <div>
            {stateBtn}
        </div>
    );
};

export default Button;
