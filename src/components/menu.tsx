import React from 'react';
import avater from '../assets/avater.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { handleSignOut } from '../services/authService';


const Menu = ():JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();

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

       // https://www.creative-tim.com/twcomponents/component/dashboard-template/landing#
        <>
            <div className="bg-gray-900 w-[20%] 2xl:w-[15%] menu py-20 ">
                <img src={avater} className='w-32 rounded-full text-center m-auto' />


                <Link to='/' className="public flex  justify-center h-16 mt-5 hover:text-amber-400">
                <svg className="h-6 w-6 mt-2  text-blue-500 hover:text-amber-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /></svg>
                <p className="text-center py-3 text-white hover:text-amber-400 text-sm font-bold font-mono italic"> Public View</p>
                </Link>
               
             
                <hr className='text-gray-50'/>

             <div className="mt-10">
                    <Link to="/dashboard" className={`flex h-10 px-8 my-4 items-center ${location.pathname == '/dashboard' ? 'bg-amber-500':''}`}>
                    <svg className="h-6 w-6 text-gray-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>

                        <p className="font-medium text-base text-gray-600 ml-4">Dashboard</p>
                    </Link>


                    <Link to="/links" className={`flex h-10 px-8 my-4 items-center ${location.pathname == '/links' ? 'bg-amber-500':''}`}>
                    <svg className="h-6 w-6 text-gray-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>

                        <p className="font-medium text-base text-gray-600 ml-4">My Links</p>
                    </Link>


                    <Link to="/analytics" className={`flex h-10 px-8 my-4 items-center ${location.pathname == '/analytics' ? 'bg-amber-500':''}`}>
                    <svg className="h-6 w-6 text-gray-600 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>


                        <p className="font-medium text-base text-gray-600  ml-4">Analytics</p>
                    </Link>
             </div>




             <form onSubmit={handleOut} className='px-5 mt-10'>
               

                <button type='submit' className='bg-red-600 rounded w-full text-center py-2 text-sm font-medium font-sans text-white'>Sign Out</button>
            </form>

                        
            </div>


            
        </>
    );
}

export default Menu;