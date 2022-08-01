import {  useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import './login.scss'

import { API } from '../../constants';

const Login = () => {
    const username = useRef()
    const password = useRef()

    const navigate = useNavigate()

    const func = async (e) => {
        e.preventDefault()
        let res = await fetch( `${API}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })

        res = await res.json()

        if(res.status === 200){
            localStorage.setItem('token', res.token)
            navigate("/admin", { replace: true });
        } else {
            alert(res.error || res.message)
        }
    }

    return (
        <div>
            <form  className="login">
                <h2 className="login__title">Tizimga kirish</h2>
                <label className="login__label">
                    <input placeholder="Username" type="text" ref={username}/>
                </label>
                <label className="login__label">
                    <input placeholder="Parol" type="text" ref={password} />
                </label>
                <p className="login__help">Parolni unutdingizmi?</p>
                <button className="login__submit" type="submit" onClick={func}>Kirish </button>
            </form>
        </div>
    );
}

export default Login;
