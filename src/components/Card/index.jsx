import React from 'react';

import calendar from '../../assets/calendar.svg'
import clock from '../../assets/clock.svg'
import tel from '../../assets/tel.svg'
import person from '../../assets/person.svg'
import efir from '../../assets/efir.svg'
import eye from '../../assets/eye.svg'

import style from './Card.module.scss'
import { Link } from 'react-router-dom';

const Card = ({ el }) => {
    return (
        <Link to={`single/${el.post_id}`}>
            <div className={style.card}>
                <div className={style.card__wrapper}>
                    <img className={style.card__img} src={el.post_img} alt="img" />
                </div>
                <div>
                    <h3 className={style.card__title}>{el.post_title}</h3>
                    <div>
                        <p className={style.card__info}>
                            <img src={person} alt="img" />
                            {el.fullname}
                        </p>
                        <p className={style.card__info}>
                            <img src={tel} alt="img" />
                            {el.profession}
                        </p>
                        <p className={style.card__info}>
                            <img src={calendar} alt="img" />
                            {el.post_date.slice(0, 10)}
                        </p>
                        <p className={style.card__info}>
                            <img src={clock} alt="img" />
                            {el.post_time.slice(0, 5)}
                        </p>
                        <p className={style.card__info}>
                            <img src={efir} alt="img" />
                            {el.post_type}
                        </p>
                        <p className={style.card__info}>
                            <img src={eye} alt="img" />
                            2550
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
