import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.initialize';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
              
    };

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
      
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
        });
    },[])

    return{
        user,
        signInUsingGoogle,
        handleUserLogin,
        logOut
    }
}

export default useFirebase;