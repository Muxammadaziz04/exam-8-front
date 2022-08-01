import React from 'react';


import style from './Customs.module.scss'

const Date = ({name}) => {

    return (
        <input type="date" className={style.date} name={name}/>
    );
}

export default Date;