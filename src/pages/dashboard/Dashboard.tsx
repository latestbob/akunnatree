import React from 'react';
import {auth,db} from '../../firebase';
import { handleSignOut } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Menu from '../../components/menu';
import { useState, useEffect } from 'react';
import { fetchLinks, getTodayClick, getTotalClick } from '../../services/firestoreService';
import ButtonNav from '../../components/bottomnav';


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

    interface Link {
        id:string;
        name: string;
        url: string;
        description?: string;
      }
      const[links, setLinks] = useState<Link[]>([]);
      const[todayclick, setTodayClick] = useState<number>(0);
      const[totalclick, setTotalClick] = useState<number>(0);


      async function getLinks(){
        try {
       const returnedLinks: Link[] = await fetchLinks();
        const todayclinks = await getTodayClick();

       const totalclinks = await getTotalClick();
 
         setLinks(returnedLinks);
         setTodayClick(todayclinks);
         setTotalClick(totalclinks);
         console.log(returnedLinks);
        } catch (err:any) {
           alert(err.message);
        }
     }
 
 
       useEffect(() => {
     
     getLinks();
   }, []);


    return (
        <>



            {/* <h2>This is the dasboard page - {currentUser?.email}</h2>


            <form onSubmit={handleOut} className='px-5'>
                <h3>Sign Out</h3>

                <button type='submit' className='bg-red-600 rounded-lg px-4 py-2 text-sm font-medium font-sans text-white'>Sign Out</button>
            </form>
         */}


                <section className="flex flex-row bg-gray-100 h-screen w-full p-0 m-0">
                    <Menu />
                    
                    
                    <div className="flex-grow">
                        <div className="blank py-8 h-10 w-full"></div>
                        
                        <div className="block md:flex justify-around items-center metrics bg-white min-h-[40vh] px-10">
                           
                            <div className="bg-gray-900 text-white shadow-lg py-3 px-3 rounded h-[20vh] w-full md:w-2/5 flex flex-col justify-center items-center">

                                <h3 className="text-center text-lg">Total Links</h3>

                                <h2 className="text-2xl font-bold text-center">{links.length}</h2>

                            </div>

                            <div className="bg-blue-600 text-white shadow-lg py-3 px-3 rounded h-[20vh] w-full md:w-2/5 flex flex-col justify-center items-center">
                            <h3 className="text-center text-lg">Clicks Today</h3>

                                <h2 className="text-2xl font-bold text-center">{todayclick}</h2>
                            </div>

                            <div className="bg-green-700 text-white shadow-lg py-3 px-3 rounded h-[20vh] w-full md:w-2/5 flex flex-col justify-center items-center">
                                <h3 className="text-center text-lg">Overall Clicks</h3>

                                <h2 className="text-2xl font-bold text-center">{totalclick}</h2>
                            </div>

                        </div>


                    </div>


                    <ButtonNav />
                </section>
        </>
    );
}

export default Dashboard;