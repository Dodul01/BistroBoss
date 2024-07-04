import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvier = new GoogleAuthProvider();

    // Google Sign In 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvier);
    }

    // Sign Up With Firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In With Firebase
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out With Firebase
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Update User Profile
    const updateUserProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // TODO: Get token and store
            } else {
                // TODO: Remove token 
            }
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user, loading, createUser,
        signInUser, logOut, updateUserProfile,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders