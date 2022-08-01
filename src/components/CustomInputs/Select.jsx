import React from 'react';

import selectIcon from '../../assets/select.svg'

import style from './Customs.module.scss'

const Select = ({children, name}) => {
    return (
        <div>
            <select className={style.select} name={name}>
                {
                    children
                }
            </select>
            <img src={selectIcon} alt="icon" />
        </div>
    );
}

export default Select;
