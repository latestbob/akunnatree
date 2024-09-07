import React from 'react';
import avater from '../assets/avater.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import ux from '../assets/ux.png'
import web from '../assets/web-link.png'
import { motion, spring } from 'framer-motion';
import whatsapp from '../assets/whatsapp.png';

const Home = (): JSX.Element => {

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
                
                className="socials mt-4 mb-16 flex w-1/2 md:w-1/5 mx-auto max-h-16 justify-evenly align-middle">


                        <motion.img 
                            whileHover={{
                                scale:1.4
                            }}
                        className='social w-10' src={instagram} />
                        <motion.img 
                            whileHover={{
                                scale:1.4
                            }}
                        className='social w-10' src={tiktok} />
                        <motion.img
                            whileHover={{
                                scale:1.4
                            }}
                        className='social w-10' src={facebook} />

                        <motion.img
                            whileHover={{
                                scale:1.4
                            }}
                        className='social w-10' src={whatsapp} />


                </motion.div>


                <div className="tree w-full md:w-3/4  py-3 m-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4" >

                    <div className="bg-white py-3 md:py-5 rounded-lg h-auto px-8  md:border-2 border-amber-400">

                        <div className='flex flex-row-reverse md:flex-row justify-between md:justify-around w-full md:w-1/2'>
                           <img src={ux} className="w-8 rounded" alt="" /> 
                           <p className="font-normal md:font-medium ">Pluto Beauty Supplies</p>
                        </div>
                    
                    </div>

                    <div className="bg-white py-3 md:py-5 rounded-lg h-auto px-8  md:border-2 border-amber-400">

                        <div className='flex flex-row-reverse md:flex-row justify-between md:justify-around w-full md:w-1/2'>
                           <img src={ux} className="w-8 rounded" alt="" /> 
                           <p className="font-normal md:font-medium ">Pluto Beauty Supplies</p>
                        </div>
                    
                    </div>

                    <div className="bg-white py-3 md:py-5 rounded-lg h-auto px-8  md:border-2 border-amber-400">

                        <div className='flex flex-row-reverse md:flex-row justify-between md:justify-around w-full md:w-1/2'>
                           <img src={ux} className="w-8 rounded" alt="" /> 
                           <p className="font-normal md:font-medium ">Pluto Beauty Cafe</p>
                        </div>
                    
                    </div>

                    <div className="bg-white py-3 md:py-5 rounded-lg h-auto px-8  md:border-2 border-amber-400">

                        <div className='flex flex-row-reverse md:flex-row justify-between md:justify-around w-full md:w-1/2'>
                           <img src={ux} className="w-8 rounded" alt="" /> 
                           <p className="font-normal md:font-medium ">Pluto Beauty Supplies</p>
                        </div>
                    
                    </div>
                    
                </div>

                

            </section>
        </>
    );
}

export default Home;