import React from 'react';

import LoginBox from '../components/LoginBox/LoginBox'

interface HomeProps {
    handleTokens: (token: string) => void;
}

const Home = ({ handleTokens }: HomeProps ) => {
    return(
        <div>
            <h1>Task Manager</h1>  
        <LoginBox handleTokens={handleTokens}/>
        </div>
        
    )
}


export default Home