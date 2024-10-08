import React from 'react';
import avater from '../assets/avater.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import ux from '../assets/ux.png'
import web from '../assets/web-link.png'
import { motion, spring } from 'framer-motion';
import whatsapp from '../assets/whatsapp.png';
import { useState, useEffect } from 'react';
import { fetchLinks, addClickMetrics } from '../services/firestoreService';

const Home = (): JSX.Element => {

    interface Link {
        id:string;
        name: string;
        url: string;
        description?: string;
      }
      const[links, setLinks] = useState<Link[]>([]);

      async function getLinks(){
        try {
       const returnedLinks: Link[] = await fetchLinks();
 
         setLinks(returnedLinks);
         console.log(returnedLinks);
        } catch (err:any) {
           alert(err.message);
        }
     }
 
 
       useEffect(() => {
     
     getLinks();
   }, []);



   async function handleClicks(e:React.MouseEvent<HTMLDivElement>,id:string,name:string, url:string){
    e.preventDefault();
        try {

            await addClickMetrics(id, name, url);

            window.open(url, '_blank');
            
        } catch (err:any) {
            alert(err.message);
         }
   }
 

    return (
        <>

        {/* reference link for design here:https://linktreefreeclone.yoandev.co/ */}
            <section className="main p-0 m-0 w-full overflow-x-hidden min-h-screen bg-blue-100 py-10">

                <motion.div 
                    initial={{ opacity: 0, y:-100 }}
                    animate={{ opacity: 1 , y:0}}
                    transition={{delay:1, duration:0.8, type:'spring'}}
            
                
                className="image-div py-5 text-center">
                    <img src={avater} className='w-1/4 md:w-1/6 rounded-full mx-auto'/>

                    <h1 className="intro text-2xl  md:text-4xl  mt-4 font-bold font-sans text-blue-900">Akunna Ndubuisi </h1>

                    <h3 className="text-center font-bold text-sm md:text-base text-amber-500 font-sans pb-3">Beauty, cosmetic & personal care
                    </h3>

                    <p className="text-center text-sm mt-5 md:text-lg px-4 md:px-20 font-medium text-blue-900">Helping You Elevate Your Beauty and Aesthetic Skills: <br />  I am a Cosmetic Scientist, Injector, and Aesthetic Educator</p>
                </motion.div>

                <motion.div 
                initial ={{
                    x:-100,
                    opacity:0
                }}
                animate={{
                    opacity:1,
                    x:0
                }}
                transition={{delay:1.2,duration:1.3, type:'tween'}}
                
                className="socials mt-4 mb-16 flex w-1/2 space-x-4 md:w-1/5 mx-auto max-h-16 justify-evenly align-middle">



                    <a href="https://www.instagram.com/plutobeautysupplies/" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            whileHover={{
                                scale: 1.4
                            }}
                            className='social w-10' 
                            src={instagram} 
                            alt="Instagram"
                        />
                    </a>
                        
                    <a href="https://web.facebook.com/Plutobeautycafe1" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            whileHover={{
                                scale: 1.4
                            }}
                            className='social w-10' 
                            src={facebook} 
                            alt="Instagram"
                        />
                    </a>
                        
                        <a href="https://www.instagram.com/plutobeautycafe/" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            whileHover={{
                                scale: 1.4
                            }}
                            className='social w-10' 
                            src={instagram} 
                            alt="Instagram"
                        />
                    </a>

                    <a href="https://api.whatsapp.com/send/?phone=2348156293779&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            whileHover={{
                                scale: 1.4
                            }}
                            className='social w-10' 
                            src={whatsapp} 
                            alt="Instagram"
                        />
                    </a>


                </motion.div>


                <div className="tree w-full md:w-3/4  py-3 m-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4" >
                            

                {links.map((link) => (

                    <div 
                    onClick={(e) => handleClicks(e, link.id, link.name, link.url)}
                    className="bg-white py-3 md:py-5 rounded-lg h-auto px-8  md:border-2 border-amber-400 hover:cursor-pointer">

                        <div className='flex flex-row-reverse md:flex-row justify-between md:justify-around w-full items-center'>
                           <img src={ux} className="w-8 rounded" alt="" /> 
                           <p className="font-normal md:font-medium ">{link.name}</p>

                           <i className='fa fa-angle-right  text-slate-600'></i>
                        </div>
                    
                    </div>

                  
                ))}
                  

                   
                    
                </div>

                

            </section>
        </>
    );
}

export default Home;