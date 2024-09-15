import React from 'react';
import review from '../assets/review.jpg'
import Stepper from '../components/Stepper';

const ReviewTwo = ():JSX.Element => {

    return (
        <>
            <section className="min-h-screen w-full bg-white py-2 overflow-auto">

                


                <div className="bg-white w-full md:w-3/4 m-auto">

                        <Stepper />
               



                        <h3 className="text-lg md:text-xl font-bold mt-8 font-sans text-black text-center">Visit Our Google Review Page</h3>
                  


                        <div className=" bg-white shadow-xl m-auto w-full md:w-3/4 min-h-[50vh] px-3  md:px-10 py-4">
                        
                            <div className="shadow py-3 my-8 px-3">
                                <p className='md:px-4 text-sm  md:text-base font-normal'>Click the link below to visit our Google Review page. Once you're there, share your thoughts about your shopping experience with us. Whether it's about our products, service, or your overall experience, we'd love to know what stood out to you.</p>
                            </div>


                            <div className="shadow py-3 my-8 px-3">
                                <p className='md:px-4 text-sm  md:text-base font-normal'>After submitting your review, come back here and complete the confirmation to let us know. Once we verify your review, we'll email you a 5% off coupon code for your next purchase.</p>
                            </div>

                            <br />

                            <a href='https://g.page/r/CbU3jL3awUkCEBI/review'target='_blank' type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-2/5">
<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Google Review
</a>
                        </div>


                     
                        
                        
                </div>

            </section>
        </>
    );

}

export default ReviewTwo;