import React, { useEffect, useRef, useState } from 'react';
import { API } from '../../constants';
import Card from '../Card';
import './home.scss'


const Main = () => {
    const [categories, setCategories] = useState([])
    const [list, setList] = useState([])
    const [names, setNames] = useState([])
    const dateRef = useRef()
    const categoryRef = useRef()
    const typeRef = useRef()
    const nameRef = useRef()

    const func = async () => {
        let res = await fetch(`${API}/categories`)
        res = await res.json()
        setCategories(res.data)
    }

    const getCards = async (host) => {
        let res = await fetch(host)
        res = await res.json()
        setList(res.data)
    }

    const getNames = async (host) => {
        let res = await fetch(host)
        res = await res.json()
        setNames(res.data)
    }

    const handleBtn = async() => {
        console.log({
            date: dateRef.current.value,
            type: typeRef.current.value,
            fullname: nameRef.current.value,
            categories: categoryRef.current.value
        });
        let query = [
            `${dateRef.current.value ? `date=${dateRef.current.value}`: ''}`,
            `${typeRef.current.value ? `type=${typeRef.current.value}`: ''}`,
            `${nameRef.current.value ? `fullname=${nameRef.current.value}`: ''}`,
            `${categoryRef.current.value ? `category=${categoryRef.current.value}`: ''}`
        ]

        query = query.filter(el => el !== '')

        console.log(`${API}/posts?${query.join('&')}`);
        getCards(`${API}/posts?${query.join('&')}`)
    }

    useEffect(() => {
        func()
        getCards(`${API}/posts?limit=10`)
        getNames(`${API}/fullname`)
    }, [])

    return (
        <main className='container main'>
            <section className="filter">
                <input type="date" className="select dateInput" min="2000-01-01" max="2022-12-31" ref={dateRef} />

                <select className="select" ref={categoryRef}>
                    <option value="">SubCategories</option>
                    {
                        categories.length && categories?.map(ctg => {
                            return <optgroup label={ctg.category_name} key={ctg.category_id}>
                                {
                                    ctg.sub_categories.map(subCtg => <option value={subCtg.sub_category_id} key={subCtg.sub_category_id}>{subCtg.sub_category_name}</option>)
                                }
                            </optgroup>
                        })
                    }
                </select>

                <select className="select" ref={typeRef}>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>

                <select id="nameSelect" className="select" ref={nameRef}>
                    <option value={''}>Ism</option>
                    {
                        names?.length && names?.map((name, index) => <option key={index} value={name.fullname}>{name.fullname}</option>)
                    }
                </select>

                <button className="filter__find" id="filterBtn" onClick={handleBtn}>
                    Izlash
                </button>
            </section>

            <div className="cards_block">
                {
                    list?.length && list.map(el => <Card el={el} key={el.post_id}/>)
                }
            </div>
            <button className='btn' onClick={() => getCards(`${API}/posts`)}>
                Ko’proq ko’rish
            </button>
        </main>
    );
}

export default Main;
