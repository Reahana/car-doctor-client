import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn() 
        .then(result => {
            const loggerInUser = result.user;
            console.log(loggerInUser);
            // setError(' ');
            // navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }
    return (
        <div>
             <div className="divider">or</div> 
             <div className='text-center'>
                <button onClick={handleGoogleSignIn} class="btn btn-circle btn-outline">
                    G
                </button>
             </div>
        </div>
    );
};

export default SocialLogin;