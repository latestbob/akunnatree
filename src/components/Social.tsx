import React from 'react';
import { useState } from 'react';

const Social = ():JSX.Element => {


    const [isOpen, setIsOpen] = useState(false); // Modal visibility state


    const[name, setName] = useState<string>("");
    const[url, setUrl] = useState<string>("");
    const[description, setDescription] = useState<string>("");



    function handleNameChange(e:React.ChangeEvent<HTMLInputElement>){

        setName(e.target.value)
    }

    function handleUrlChange(e:React.ChangeEvent<HTMLInputElement>){

        setUrl(e.target.value)
    }

    function handleDescriptionChange(e:React.ChangeEvent<HTMLTextAreaElement>){

        setDescription(e.target.value)
    }


    function handleSubmit(e:React.FormEvent){
        e.preventDefault();


        alert("working")
    }



    // Function to open the modal
    const openModal = () => {
      setIsOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setIsOpen(false);
    };


    return (
        <>

            <div className="mt-10 rounded bg-white h-[40vh] mx-10 px-8">
                    <h3 className="text-center py-5 text-2xl font-semibold font-sans">My Link Tree</h3>

                    <div className='text-right'>
                    <button onClick={openModal} className='bg-green-700 rounded text-center py-2 text-sm px-3 font-medium font-sans text-white'>Add New Link</button>

                    </div>



            </div>

            {/* social modal */}




            <div>
    

      {isOpen && (
        <div
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Add A New Link
            </div>

                
            {/* form start */}



<form onSubmit={handleSubmit} className="max-w-md mx-auto">
  
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={handleNameChange} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={handleUrlChange} type="url" name="url"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">URL</label>
  </div>


  <div className="relative z-0 w-full mb-5 group">
      <textarea onChange={handleDescriptionChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link Description(Optional)</label>
  </div>
  
  
  
  <button type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Submit</button>
</form>



            {/* form end */}
            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button
                onClick={closeModal}
                className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Cancel
              </button>
             
            </div>
          </div>
        </div>
      )}
    </div>










            {/* end of social modal */}
        </>
    );
}

export default Social;