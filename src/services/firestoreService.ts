import React from 'react';

import {auth, db} from '../firebase';
import { collection, getDocs, where, query, doc, setDoc,deleteDoc, addDoc, updateDoc } from "firebase/firestore";




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


  //delete from firebase


  export async function deleteLink(id:string){

    try {
        const linkDocRef = doc(db, 'links', id);
        await deleteDoc(linkDocRef); // Delete the document
    } catch (error: any) {
        throw new Error(error.message);
      }
  }


  //update a Link

  export async function updateLink(id:string, name:string, url:string){
    try {

        const linkDocRef = doc(db, 'links', id); 
        await updateDoc(linkDocRef, {
            name: name, // Update the name field
            url: url,   // Update the url field
        });
        
    } catch (error: any) {
        throw new Error(error.message);
      }

  }


  //analytics


  export async function addClickMetrics(id:string, name:string, url:string){

    try {
        const docRef = await addDoc(collection(db, 'metrics'), {
            linkId: id,
            name: name,
           date: new Date().toISOString().split('T')[0],
            createdAt: new Date(),
          });
    
          console.log('Document written with ID: ', docRef.id);
    

    } catch (error:any) {
        throw new Error(error.message);
      
    }

}


//get todays click

 export async function getTodayClick(){
    try {
        // Get the current date in 'YYYY-MM-DD' format
        const today = new Date().toISOString().split('T')[0];
    
        // Reference the 'metrics' collection
        const metricsCollection = collection(db, 'metrics');
    
        // Query for documents where the 'date' field equals today's date
        const q = query(metricsCollection, where('date', '==', today));
    
        // Execute the query
        const querySnapshot = await getDocs(q);
    
        // Return the total number of documents
        return querySnapshot.size;
      } catch (error:any) {
        console.error('Error getting today\'s metrics:', error);
        throw new Error(error.message);
      }
 }


 //get Today Clicks


 export async function getTotalClick(){
    try {
        // Get the current date in 'YYYY-MM-DD' format
       
    
        // Reference the 'metrics' collection
    const metricsCollection = collection(db, 'metrics');

    // Fetch all documents from the 'metrics' collection
    const querySnapshot = await getDocs(metricsCollection);
    
        // Return the total number of documents
        return querySnapshot.size;
      } catch (error:any) {
        console.error('Error getting today\'s metrics:', error);
        throw new Error(error.message);
      }
 }


