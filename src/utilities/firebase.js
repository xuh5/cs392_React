import { getDatabase, onValue, ref, update, get, push, set ,remove} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAUfRDxoX9nd3GRH2ZgrgenZIPEAavMMZw",
    authDomain: "cs392-react-haichen.firebaseapp.com",
    databaseURL: "https://cs392-react-haichen-default-rtdb.firebaseio.com",
    projectId: "cs392-react-haichen",
    storageBucket: "cs392-react-haichen.appspot.com",
    messagingSenderId: "313610334645",
    appId: "1:313610334645:web:1241016a1436e5e7f0e9fc"
  };
  // Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };

  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
  
  const firebaseSignOut = () => signOut(getAuth(firebase));
  
  export { firebaseSignOut as signOut };
  
  export const useAuthState = () => {
    const [user, setUser] = useState();
    
    useEffect(() => (
      onAuthStateChanged(getAuth(firebase), setUser)
    ), []);
  
    return [user];
  };