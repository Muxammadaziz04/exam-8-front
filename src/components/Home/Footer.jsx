import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container nav">
                <a href="#" className="nav__logo">Pressa</a>

                <ul className="nav__list">
                    <li className="nav__list__item"><a href="#" className="nav__list__item__links">Biz haqimizda</a></li>
                    <li className="nav__list__item"><a href="#about" className="nav__list__item__links">Savol va javoblar</a></li>
                </ul>

                <a href="tel:+71 200-11-02" class="nav__call">
                    <img src="../Img/call.png" alt="" />
                    +71 200-11-02
                </a>
                <ul className="nav__social">
                    <a href="https://www.facebook.com/" className="nav__social__link">
                        <img src="../Img/facebook.png" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/" className="nav__social__link">
                        <img src="../Img/instagram.png" alt="facebook" />
                    </a>
                    <a href="https://xn--80affa3aj0al.xn--80asehdb/" className="nav__social__link">
                        <img src="../Img/telegram.png" alt="facebook" />
                    </a>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
