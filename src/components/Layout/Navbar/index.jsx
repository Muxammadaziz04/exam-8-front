import React from 'react';
import { Link } from 'react-router-dom';

import plusIcon from '../../../assets/plusIcon.svg'
import searchIcon from '../../../assets/searchIcon.svg'

import style from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={`${style.navbar__block} container`}>
                <Link className={style.navbar__title} to='/'><h1 className={style.navbar__title}>Pressa</h1></Link>
                <label className={style.navbar__label}>
                    <button>
                        <img src={searchIcon} alt="icon" />
                    </button>
                    <input type="text" className={style.navbar__input} />
                </label>
                <Link to={'/about'}><p className={style.navbar__link}>Biz xaqimizda</p></Link>
                <p className={style.navbar__link}>Savol va javoblar</p>
                <Link to={'/post'} className={style.navbar__button}>
                    <img src={plusIcon} alt="icon" />
                    <span>E’lon berish</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
