import React from 'react';

import LoginBox from '../components/LoginBox/LoginBox'

const Home = () => {
    return(
        <div>
            <h1>Task Manager</h1>  
        <LoginBox handleTokens={handleTokens}/>
        </div>
        
    )
}


export default Home