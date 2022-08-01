import React, { useEffect, useRef, useState } from 'react';

import calendar from '../../assets/calendar.svg'
import clock from '../../assets/clock.svg'
import efir from '../../assets/efir.svg'
import share from '../../assets/share.svg'
import fbook from '../../assets/fbook.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/insta.svg'
import tele from '../../assets/tele.svg'
import comment from '../../assets/comment.svg'

import style from './singlePage.module.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../constants';

const SinglePage = () => {
    const [data, setData] = useState([])
    const [comments, setComments] = useState([])
    const { post_id } = useParams()
    const textRef = useRef()
    const navigate = useNavigate()

    const getData = async (host) => {
        let res = await fetch(host)
        res = await res.json()
        setData(res.data[0])
    }

    const getComments = async (host) => {
        let res = await fetch(host)
        res = await res.json()
        console.log(res.data);
        setComments(res.data[0].comments)
    }

    const postComment = async() => {
        const token = localStorage.getItem('token')

        if(!token){
            navigate('/register', {replace: true})
        }else{
            const body = {
                post_id,
                comment_body: textRef.current.value
            }
            let res = await fetch(`${API}/comment`, {
                method: "POST",
                headers: {
                    token,
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(body)
            })
            res = await res.json()
            
            if(res.error) alert(res.error)
        }
    }

    useEffect(() => {
        getData(`${API}/posts/${post_id}`)
        getComments(`${API}/posts/${post_id}`)
    }, [post_id])

    return (
        <>
            <div className={style.singlePage + " container"}>
                <div className={style.singlePage__info}>
                    <h3>{data.post_title}</h3>
                    <div>
                        <p>
                            <img src={calendar} alt="icon" />
                            {data.post_date?.slice(0, 10)}
                        </p>
                        <p>
                            <img src={clock} alt="icon" />
                            {data.post_time?.slice(0, 5)}
                        </p>
                        <p>
                            <img src={efir} alt="icon" />
                            {data.post_type}
                        </p>
                    </div>
                    <p className={style.singlePage__share}>
                        <img src={share} alt="icon" />
                        Ulashing
                    </p>
                    <span>
                        <img src={fbook} alt="icon" />
                        <img src={twitter} alt="icon" />
                        <img src={insta} alt="icon" />
                        <img src={tele} alt="icon" />
                    </span>
                </div>

                <div className={style.singlePage__about}>
                    <h3 className={style.singlePage__title}>{data.post_title}</h3>
                    <p className={style.singlePage__desc}>
                        {
                            data.post_desc
                        }
                    </p>
                    <div>
                        <img className={style.singlePage__img} src={data.post_img} alt="img" />
                    </div>
                    <p className={style.singlePage__desc}>
                        {
                            data.post_text
                        }
                    </p>
                    <p className={style.comment}>
                        <img src={comment} alt="icon" />
                        Izoxlar
                    </p>
                    <textarea className={style.textArea} placeholder={'Izoh yozing...'} ref={textRef}>

                    </textarea>
                    <button onClick={postComment} className={style.btn}>
                        Yuborish
                    </button>
                    <div className={style.comments}>
                        {
                            comments?.length && comments?.map(el => {
                                return(<div className={style.comment} key={el.comment_id}>
                                    <p>{el.username}</p>
                                    <p>{el.comment_body}</p>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePage;