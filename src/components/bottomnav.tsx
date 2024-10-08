import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Location, useNavigate } from 'react-router-dom';
import { handleSignOut } from '../services/authService';

const ButtonNav = ():JSX.Element => {

    const location = useLocation();
    const navigate = useNavigate();


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
             <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow text-dark py-3 flex justify-center px-2">
                        
           
                    

                <Link to="/dashboard" className={`flex h-10 px-8 my-4 items-center ${location.pathname == '/dashboard' ? 'shadow':''}`}>
                    <svg className={`h-6 w-6 ${location.pathname == '/dashboard' ? 'text-amber-500' : 'text-gray-600'}`}   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>

                        <p className={`font-medium text-sm ${location.pathname == '/dasboard' ? 'text-amber-500' : 'text-gray-600'} ml-4`}>Dashboard</p>
                    </Link>


                    <Link to="/links" className={`flex h-10 px-8 my-4 items-center ${location.pathname == '/links' ? 'shadow':''}`}>
                    <svg className={`h-6 w-6 ${location.pathname == '/links' ? 'text-amber-500' : 'text-gray-600'}`}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>

                        <p className={`font-medium text-sm ${location.pathname == '/links' ? 'text-amber-500' : 'text-gray-600'} ml-4`}>Links</p>
                    </Link>

                    <button onClick={handleOut} className={`flex h-10 px-8 my-4 items-center `}>
                    <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
</svg>

            
                    </button>
                    </div>
        
        </>
    )
}

export default ButtonNav;