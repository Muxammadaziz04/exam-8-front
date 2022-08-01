import React from 'react';

import style from './Customs.module.scss'

const RadioBtn = ({checked, text}) => {
    return (
        <label className={style.radio}>
            <input type="radio" name='s'value={text} defaultChecked={checked}/>
            <span>{text}</span>
        </label>
    );
}

export default RadioBtn;