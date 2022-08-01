import React from 'react';

import style from './Customs.module.scss'

const Input = ({placeholder, color, type, name}) => {
    return (
        <input type={type} placeholder={placeholder} className={style.input} style={{'color': `${color}`}} name={name}/>
    );
}

export default Input;
