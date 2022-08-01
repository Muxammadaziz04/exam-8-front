import React from 'react';
import { Navigate } from 'react-router-dom'
import Admin from '../components/Admin';

const AdminPage = () => {
    const token = localStorage.getItem('token')

    if(!token){
        return <Navigate to='/login' replace={true} />
    }

    return (
        <Admin />
    );
}

export default AdminPage;
