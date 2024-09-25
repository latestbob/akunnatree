import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion, spring } from 'framer-motion';

const Stepper = ():JSX.Element => {
    const location = useLocation();
    return (
        <>
             <motion.div
                  initial={{ opacity: 0, x:100 }}
                  animate={{ opacity: 1 , x:0}}
                  transition={{delay:1, duration:0.9, type:'spring'}}
          
             className="card py-3 shadow w-full px-2 md:px-5 bg-white">
                <ol className="flex justify-center items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li className={`flex md:w-full ${location.pathname == '/pluto-review' ? 'items-center text-green-600 dark:text-green-500' : ''} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
        <Link to='/pluto-review'>
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {
                location.pathname == '/pluto-review' && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                )
            }
            
            Welcome<span className="hidden sm:inline-flex sm:ms-2"></span>
        </span>
        </Link>
    </li>
    <li className={`flex md:w-full items-center ${location.pathname == '/pluto-review-next' ? 'items-center text-green-600 dark:text-green-500' : ''} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
            <Link to="/pluto-review-next">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {
                location.pathname == '/pluto-review-next' && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                )
            }
            <span className="me-2">2</span>
            Google <span className="hidden sm:inline-flex sm:ms-2">Review</span>
        </span>
            </Link>
    </li>
    

    <li className={`flex md:w-full items-center ${location.pathname == '/confirmation' ? 'items-center text-green-600 dark:text-green-500' : ''} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
            <Link to="/confirmation">
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {
                location.pathname == '/confirmation' && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
                )
            }
            <span className="me-2">3</span>
            Confirmation 
        </span>
            </Link>
    </li>
</ol>

                </motion.div>
        
        </>
    );
}

export default Stepper;