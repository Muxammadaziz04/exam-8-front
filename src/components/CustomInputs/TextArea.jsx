import React from 'react';

import style from './Customs.module.scss'

const TextArea = ({placeholder, name}) => {
    return (
        <textarea className={style.textArea} placeholder={placeholder} name={name}>
            
        </textarea>
    );
}

export default TextArea;
