import React from 'react';

import style from './Customs.module.scss'

const Time = ({name}) => {
    return (
        <input type="time" className={style.time} name={name} />
    );
}

export default Time;
