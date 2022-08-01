import React from 'react';

import telIcon from '../../../assets/telIcon.svg'
import facebook from '../../../assets/facebook.svg'
import insta from '../../../assets/instagram.svg'
import telegram from '../../../assets/telegram.svg'

import style from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footer__block} container`}>
                <p className={style.footer__title}>Pressa</p>
                <p className={style.footer__link}>Biz haqimizda</p>
                <p className={style.footer__link}>Savol va Javoblar</p>
                <p className={style.footer__link} href="tel:+712001102">
                    <img src={telIcon} alt="icon" />
                    +71 200-11-02
                </p>
                <div className={style.footer__social__block}>
                    <p className={style.footer__social__link}>
                        <img src={facebook} alt="icon" />
                    </p>
                    <p className={style.footer__social__link}>
                        <img src={insta} alt="icon" />
                    </p>
                    <p className={style.footer__social__link}>
                        <img src={telegram} alt="icon" />
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
