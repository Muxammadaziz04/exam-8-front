import React from 'react';

import Input from '../../CustomInputs/Input.jsx'
import TextArea from '../../CustomInputs/TextArea'
import upload from '../../../assets/upload.svg'

import style from './PostForm.module.scss'

const PostForm = ({func}) => {

    return (
        <div className={style.form}>
            <h2 className={style.form__title}>Post</h2>
            <input className={style.form__input} type="text" placeholder='Mavzuni sarlavhasi'name='title' />
            <p className={style.form__subTitle}>Description</p>
            <Input type="text" placeholder={"Description"}  name="desc"/>
            <p>Rasm yuklash</p>
            <label className={style.form__file}>
                <span>
                    <img src={upload} alt="icon" />
                    Upload img
                </span>
                <input type="file" name="img" />
                <p>Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin</p>
            </label>
            <p className={style.form__subTitle}>Mavzu matni</p>
            <TextArea placeholder={'Matn kiriting'}  name="text"/>
            <span>
                <button className={style.form__btn} type='reset'>Bekor qilish</button>
                <button className={style.form__btn__submit} type='submit' onClick={func}>E’lonni yuborish</button>
            </span>
        </div>
    );
}

export default PostForm;
