import React, {  useState } from 'react';

import IndividualForm from '../IndividualForm'
import EntityForm from '../EntityForm'

import style from './Organizator.module.scss'

const OrganizatorForm = () => {
    const [value, setValue] = useState('individual')

    return (
        <div className={style.form}>
            <h2 className={style.form__title}>Tashkilotchi</h2>
            <div className={style.form__radio__wrapper}>
                <label className={style.form__radio}>
                    <p>Jismoniy shaxs</p>
                    <input type="radio" defaultChecked onChange={(e) => setValue(e.target.value)} name='face' value="individual" />
                </label>
                <label className={style.form__radio}>
                    <p>Yuridik shaxs</p>
                    <input type="radio" name='face' onChange={(e) => setValue(e.target.value)} value="entity" />
                </label>
            </div>
            {
                value === 'individual' ? <IndividualForm /> : <EntityForm />
            }
        </div>
    );
}

export default OrganizatorForm;
