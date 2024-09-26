import React from 'react';

import {auth, db} from '../firebase';
import { collection, getDocs, where, query, doc, setDoc,deleteDoc, addDoc } from "firebase/firestore";




export async function addLinkToFirestore(name:string, url:string, description?:string){

    try {
        const docRef = await addDoc(collection(db, 'links'), {
            name: name,
            url: url,
            description: description || '', // Optional field
            createdAt: new Date(),
          });
    
          console.log('Document written with ID: ', docRef.id);
    

    } catch (error:any) {
        throw new Error(error.message);
      
    }

}


// fetch Links from firestore


// export async function fetchLinks(){

//     try {
//         const linksCollection = collection(db, 'links');
//         // Fetch all documents from the 'links' collection
//       const linksSnapshot = await getDocs(linksCollection);

//       // Map through the documents and store the data
//       const linksList = linksSnapshot.docs.map((doc) => ({
//         id: doc.id, // Include document ID in case you need it
//         ...doc.data(), // Spread the document data
//       }));

//       return linksList;


//     } catch (error:any) {
//         throw new Error(error.message);
      
//     }

// }


interface Link {
    id: string;
    name: string;
    url: string;
    description?: string; // Optional field
  }
  
  // Fetch all links from Firestore
export async function fetchLinks(): Promise<Link[]> {
    try {
      const linksCollection = collection(db, 'links');
      const linksSnapshot = await getDocs(linksCollection);
  
      // Map through the documents and store the data in a typed array
      const linksList: Link[] = linksSnapshot.docs.map((doc) => {
        const data = doc.data() as Omit<Link, 'id'>; // Exclude the 'id' from doc.data()
        
        // Ensure the 'id' from Firestore document is merged correctly
        return { id: doc.id, ...data }; // Now, the Firestore id is added only once
      });
  
      return linksList;
  
    } catch (error: any) {
      throw new Error(error.message);
    }
  }