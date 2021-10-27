import firebaseAuthentication from '../firebase/Firebase.init';
import { signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

firebaseAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [isLoading, setIsloading] = useState(true);

    const googleSignIn = () => {
        return signInWithPopup();
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
    }, []);

    const logOut = () => {
        return signOut();
    }
    return {
        user,
        setUser,
        googleSignIn,
        logOut,
        isLoading,
        setIsloading
    }
};

export default useFirebase;