import React from 'react';
import auth from '../../firebase';
import { handleSignOut } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Dashboard = ():JSX.Element => {


    const navigate = useNavigate();

    const { currentUser, loading } = useAuth(); 

    async function handleOut(e:React.FormEvent){
        e.preventDefault();

       try {
        await handleSignOut();

        navigate('/login');
       } catch (err:any) {
            alert(err.message)
       }
    }


    return (
        <>



            <h2>This is the dasboard page - {currentUser?.email}</h2>


            <form onSubmit={handleOut} className='px-5'>
                <h3>Sign Out</h3>

                <button type='submit' className='bg-red-600 rounded-lg px-4 py-2 text-sm font-medium font-sans text-white'>Sign Out</button>
            </form>
        
        </>
    );
}

export default Dashboard;