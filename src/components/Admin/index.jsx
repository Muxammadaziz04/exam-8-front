import React, { useEffect, useState } from 'react';
import './admin.scss'

import home from '../../assets/home.svg'
import statistika from '../../assets/statistika.svg'
import deleteIcon from '../../assets/delete.svg'
import settings from '../../assets/settings.svg'
import exit from '../../assets/exit.svg'
import search from '../../assets/search.svg'

import { API } from '../../constants';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
    const [def] = useState('')
    const [list, setList] = useState([])
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const fetchData = async(host) => {
       let res = await fetch(host, {
        headers: {
            token
        }
       })

       res = await res.json()

       if(res.error === 'you are not admin'){
        navigate('/login', {replace: true})
    }
    }

    const func = async (host) => {
        let res = await fetch(host, {
            headers: {
                token
            }
        })
        
        res = await res.json()
        if(res.error === 'you are not admin'){
            navigate('/login', {replace: true})
        }
        setList(res.data)
    }

    useEffect(() => {
        func(`${API}/pendingPosts`)
    }, [def])

    return (
        <div className="admin">
            <div className=" sidebar">
                <p className="sidebar__logo">Pressa</p>
                <div className="sidebar__menu">
                    <p className="sidebar__menu__block">
                        <img src={home} alt="home" />
                        Bosh sahifa
                    </p>
                    <p className="sidebar__menu__block">
                        <img src={statistika} alt="home" />
                        Statistika
                    </p>
                    <p className="sidebar__menu__block">
                        <img src={deleteIcon} alt="home" />
                        O'chirilganlar
                    </p>
                    <p className="sidebar__menu__block">
                        <img src={settings} alt="home" />
                        Sozlamalar
                    </p><p className="sidebar__menu__block">
                        <img src={exit} alt="home" />
                        Chiqish
                    </p>
                </div>
                <h4 className="sidebar__year">2022 All Rights</h4>
            </div>

            <div className="main">
                <div className="main__nav">
                    <label className="main__nav__search">
                        <img src={search} alt="search" />
                        <input type="text" className="main__nav__search__input" />
                    </label>
                    <div className="main__nav__admin">
                        <div className="main__nav__admin__block">
                            <h2 className="main__nav__admin__block__name"> Abbos Janizakov</h2>
                            <h2 className="main__nav__admin__block__id"> id <span className="admin__id">16515 </span></h2>
                        </div>
                    </div>
                </div>
                <div className="filter">
                    <button className="filter__btn" onClick={() => func(`${API}/pendingPosts`)}>Kutilmoqda</button>
                    <button className="filter__btn" onClick={() => func(`${API}/posts`)}>Qabul qiligan </button>
                    <button className="filter__btn" onClick={() => func(`${API}/canceledPosts`)}>Rad etilgan</button>
                </div>
                <div className="events2">
                    <h4 className="events__title">Eng so'ngi xabarnomalar</h4>
                    {
                        list?.length && list?.map((el, index) => {
                            return (<div className="cards" key={el.post_id ||index}>
                                <div className="cards__main">
                                    <h4 className="cards__main__title"> {el.post_title}</h4>
                                    <div className="cards__main__btn">
                                        <button className="cards__main__btn__delay" onClick={() => {
                                            fetchData(`${API}/cancel/${el.post_id}`)
                                            func(`${API}/posts`)
                                        }}> Bekor qilish</button>
                                        <button className="cards__main__btn__submit" onClick={() => {
                                            fetchData(`${API}/confirm/${el.post_id}`)
                                            func(`${API}/posts`)
                                        }}> Tasdiqlash</button>
                                    </div>
                                </div>
                                <div className="cards__info">
                                    <h4 className="cards__info__user">{el.fullname}</h4>
                                    <h4 className="cards__info__date">{el.phone_num}</h4>
                                    <h4 className="cards__info__date">{el.post_date}</h4>
                                    <h4 className="cards__info__date">{el.post_time}</h4>
                                    <h4 className="cards__info__date">{el.subcategory}</h4>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;
