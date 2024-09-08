import { createContext, useState, useEffect,  useContext, ReactNode } from "react";
import auth from "../firebase";
import { onAuthStateChanged , User} from "firebase/auth";

//create context


interface AuthContextType {
    currentUser : User | null;
    loading :boolean,


}
const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthContextProvider = function ({ children }: { children: ReactNode }) {

    const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
    
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
          });

              // Cleanup the subscription on unmount
    return () => unsubscribe();

    }, []); 
    


   const value = {
        currentUser,
        loading,
    }

    return <AuthContext.Provider value={value}> {!loading && children} </AuthContext.Provider>
}

// custom hook to use the context

export const useAuth =() => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
      }
      return context;
}