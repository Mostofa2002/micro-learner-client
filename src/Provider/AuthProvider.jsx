import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../config/firebase.config";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  const googleLogin = (value) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    createUser,
    LogOut,
    signIn,
    googleLogin,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
