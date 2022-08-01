import React from 'react';

import DateForm from '../../components/Forms/DateForm'
import OrganizatorForm from '../../components/Forms/OrganizatorForm';
import PostForm from '../../components/Forms/PostForm'
import home from '../../assets/homeIcon.svg'

import style from './Post.module.scss'

import { API } from '../../constants';

const Post = () => {

    const func = async(e) => {
        e.preventDefault()
        let form = document.querySelector('#form')
        let post_date = form.elements.date.value
        let post_time = form.elements.time.value
        let post_category = form.elements.categories.value
        let post_subcategory = form.elements.sub_categories.value
        let post_type = document.querySelector('input[name="s"]:checked').value
        let post_link = form.elements.link.value
        let fullname = form.elements.fullname.value
        let proffesion = form.elements.profession.value
        let phone_num = form.elements.phone_num.value
        let additional_phone_num = form.elements.additional_phone_num.value
        let post_title = form.elements.title.value
        let post_img = form.elements.img.files[0]
        let post_desc = form.elements.desc.value
        let post_text = form.elements.text.value

        const fd = new FormData()

        fd.append('post_date', post_date)
        fd.append('post_time', post_time)
        fd.append('post_category', post_category)
        fd.append('post_subcategory', post_subcategory)
        fd.append('post_type', post_type)
        fd.append('post_link', post_link)
        fd.append('fullname', fullname)
        fd.append('profession', proffesion)
        fd.append('phone_num', phone_num)
        fd.append('additional_phone_num', additional_phone_num)
        fd.append('post_title', post_title)
        fd.append('img', post_img)
        fd.append('post_desc', post_desc)
        fd.append('post_text', post_text)

        let res = await fetch(`${API}/posts`, {
            method: "POST",
            body: fd
        })

        res = await res.json()

        alert(res.error || res.message)
    }

    return (
        <div className={`${style.post} container`}>
            <p className={style.post__nav}>
                <img src={home} alt="icon" />
                E’lon berish
            </p>

            <div className={style.post__container}>
                <h3>E’lon berish</h3>
                <form id='form'>
                    <DateForm />
                    <OrganizatorForm />
                    <PostForm func={func} />
                </form>
            </div>
        </div>
    );
}

export default Post;
