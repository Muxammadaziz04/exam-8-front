import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.scss'
import { API } from '../../constants';

const Register = () => {
    const username = useRef()
    const password = useRef()

    const navigate = useNavigate()

    const func = async (e) => {
        e.preventDefault()
        let res = await fetch( `${API}/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
        console.log(1);

        res = await res.json()
console.log(res);
        if(res.status === 201){
            localStorage.setItem('token', res.token)
            navigate('/', { replace: true });
        } else {
            alert(res.error || res.message)
        }
    }

    return (
        <div>
            <form  className="login">
                <h2 className="login__title">Register</h2>
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

export default Register;
