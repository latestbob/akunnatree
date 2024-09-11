import React from 'react';
import review from '../assets/review.jpg'
import Stepper from '../components/Stepper';

const Review = ():JSX.Element => {

    return (
        <>
            <section className="flex min-h-screen w-full bg-white p-3 overflow-auto">

                <div className="hidden md:block md:w-[22%] min-h-screen bg-gray-800 rounded"></div>


                <div className="flex-grow flex flex-col items-center bg-white">

                        <Stepper />
               



                        <h3 className="text-lg md:text-xl font-bold mt-3 font-sans text-black">Enjoy Exclusive Savings on Next Purchase</h3>
                            <p className="text-center text-sm px-5 my-5 md:px-10 md:text-base font-normal ">Thank you for choosing Pluto Beauty Supplies! <br /> We value your feedback and want to offer you 5% off your next purchase when you leave us a positive review. 
                              

</p>


                        <div className="w-[70%] min-h-[50vh] text-center mt-4">
                            <img src={review} alt="" className="rounded-lg block md:scale-95" />

                            

                        </div>
                        


                        <br />
                    
                        
                        <button type='submit' className='bg-green-700 rounded-lg w-[60%]  text-center py-3 text-small font-bold font-sans text-white'>GET STARTED</button>
                </div>

            </section>
        </>
    );

}

export default Review;