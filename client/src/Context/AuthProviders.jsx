import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvier = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

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
                const userInfo = { email: currentUser.email };
                // Get token and store
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                        }
                    })
            } else {
                // Remove token 
                localStorage.removeItem('token')
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