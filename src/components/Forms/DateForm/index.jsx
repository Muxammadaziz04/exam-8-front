import React, { useEffect, useState } from 'react';

import Date from '../../CustomInputs/Date.jsx'
import Time from '../../CustomInputs/Time.jsx'
import Select from '../../CustomInputs/Select.jsx'
import RadioBtn from '../../CustomInputs/RadioBtn.jsx'
import Input from '../../CustomInputs/Input.jsx'

import style from './DateForm.module.scss'

import { API } from '../../../constants/index.js'; 


const DateForm = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const func = async() => {
            let res = await fetch(`${API}/categories`)
            res = await res.json()
            setCategories(res.data)
        }
        func()
    }, [])

    return (
        <div className={style.form}>
            <h3 className={style.form__title}>Vaqt va yo’nalishni tanlang</h3>
            <p className={style.form__subTitle}>O’tkaziladigan sanani kiriting</p>
            <div className={style.form__dates}>
                <Date name="date"/>
                <Time name="time"/>
            </div>
            <div className={style.form__inputs}>
                <div>
                    <p className={style.form__subTitle}>Yo’nalishni belgilang</p>
                    <Select name="categories">
                        {
                            categories.map(ctg => {
                                return <option key={ctg.category_id} value={ctg.category_id}>{ctg.category_name}</option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <p className={style.form__subTitle}>Ichki yo’nalish</p>
                    <Select name="sub_categories">
                        {
                            categories.map(ctg => {
                                return ctg.sub_categories.map(subCtg => {
                                    return <option key={subCtg.sub_category_id} value={subCtg.sub_category_id}>{subCtg.sub_category_name}</option>
                                })
                            })
                        }
                    </Select>
                </div>
                <div>
                    <p className={style.form__subTitle}>Tadbir turi</p>
                    <div className={style.form__radio}>
                        <RadioBtn checked={true} text="online"/>
                        <RadioBtn checked={false} text="offline"/>
                    </div>
                </div>
                <div>
                    <p className={style.form__subTitle}>Link kiriting</p>
                    <Input type="link" color="#0085FF" name="link"/>
                </div>
            </div>
        </div>
    );
}

export default DateForm;
