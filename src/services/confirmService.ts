import React from 'react';
import axios from 'axios';

export async function confirmReview(name:string , email:string){


    try {
        const response =  await axios.post(`http://localhost:5000/api/send`, {
            name: name,
            email:email
          });

    
        // Handle success
     

       return response;
      
    
        
    } catch (error:any) {
        throw new Error(error.message);
    }


}