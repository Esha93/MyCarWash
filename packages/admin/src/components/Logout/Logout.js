import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.close();
    })
    return(
        <div></div>
    )
}

export default Logout;