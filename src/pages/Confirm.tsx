import React from 'react';
import review from '../assets/review.jpg'
import Stepper from '../components/Stepper';
import { useState, useEffect } from 'react';
import { confirmReview } from '../services/confirmService';

import Swal from 'sweetalert2';


const Confirm = ():JSX.Element => {

    const [name, setName] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);



    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{

        setName(e.target.value);
    }

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        // setErroMessage("");
        setLoading(true);

        try {
            await confirmReview(name, email);
            setLoading(false);
            Swal.fire({
                title: "Thank You!",
                text: "Your review has been submitted successfully",
                icon: "success",
                footer: '<a href="https://plutobeautysupplies.com" style="color: #007bff; text-decoration: underline;">Explore our products while you wait for your coupon!</a>',
              });

        } catch (err:any) {
            //    setErroMessage(err.message);
            setLoading(false);
            alert(err.message);
        }   

    }


    return (
        <>
            <section className="min-h-screen w-full bg-white py-2 overflow-auto">

                


                <div className="bg-white w-full md:w-3/4 m-auto">

                        <Stepper />
               



                        <h3 className="text-lg md:text-xl font-bold mt-8 font-sans text-black text-center">🎉 Woohoo! You're Almost There! 🎉</h3>
                  


                        <div className=" bg-white shadow-xl m-auto w-full md:w-3/4 min-h-[50vh] px-3  md:px-10 py-4">
                        
                            <div className="shadow py-3 my-8 px-3">
                                <p className='md:px-4 text-sm  md:text-base font-normal'>
                                🎁🌟 Thank you for leaving a review and spreading the love! <br /><br />
                                    You’re just one step away from unlocking your 5% OFF on your next Pluto Beauty Supplies purchase! 

</p>
                            </div>


                            <div className="shadow py-3 my-8 px-3">
                                <p className='md:px-4 text-sm  md:text-base font-normal'>Just pop in the name you used on the Google Review and your email below, and we’ll send you a shiny discount code in no time!</p>
                            </div>

                            <br />

                            {/* form here */}



<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
<div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name on Review</label>
    <input onChange={handleNameChange} type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter name on review" required />
  </div>


  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input onChange={handleEmailChange} type="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  
  
  <button type="submit" className="text-black bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:bg-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-600 dark:focus:ring-blue-800">{loading ? 'Loading ...' : 'Ready, Set, Submit!'}</button>
</form>


                          <br />
                        </div>


                     
                        
                        
                </div>

            </section>
        </>
    );

}

export default Confirm;