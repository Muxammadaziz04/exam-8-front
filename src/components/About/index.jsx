import React from 'react';

import homeIcon from '../../assets/homeIcon.svg'

import style from './About.module.scss'

const About = () => {
    return (
        <div className={`${style.about} container`}>
            <span className={style.about__nav}>
                <img src={homeIcon} alt="icon" />
                Biz haqimizda
            </span>
            <h2 className={style.about__title}>Biz haqimizda</h2>
            <p className={style.about__text}>
                Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni <br />
                tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni <br />
                UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" <br />
                to'plashga qaror qildik.
            </p>
            <p className={style.about__text}>
                Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni <br />
                tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni <br />
                UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" <br />
                to'plashga qaror qildik.
            </p>
            <p className={style.about__text}>
                Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib, <br />
                ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn <br />
                tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash <br />
                vazifasi topshirildi.
            </p>
            <p className={style.about__text}>
                Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan <br />
                kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari <br />
                qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.
            </p>
        </div>
    );
}

export default About;
