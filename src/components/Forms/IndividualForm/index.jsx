import React from 'react';

import Input from '../../CustomInputs/Input';

import style from './Individual.module.scss'

const IndividualForm = () => {
    return (
        <div className={style.form}>
            <div className={style.form__wrapper}>
                <p className={style.form__subTitle}>Ismi sharifi</p>
                <Input type={'text'} name="fullname"/>
            </div>
            <div className={style.form__wrapper}>
                <p className={style.form__subTitle}>Professiya</p>
                <Input type={'text'} name="profession"/>
            </div>
            <div className={style.form__wrapper}>
                <p className={style.form__subTitle}>Telefon raqami</p>
                <Input type={'number'} name="phone_num"/>
            </div>
            <div className={style.form__wrapper}>
                <p className={style.form__subTitle}>Qo’shimcha tel raqam</p>
                <Input type={'number'} name="additional_phone_num"/>
            </div>
        </div>
    );
}

export default IndividualForm;