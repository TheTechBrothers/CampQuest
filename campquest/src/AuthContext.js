import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const AuthContext = React.createContext({
    currentUser: {},
    setCurrentUser: () => { },
    isLoggedIn: false,
    LoginIn: () => { },
    SignUp: () => { },
    signOut: () => { },
    setErrors: () => { }
});

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [errors, setErrors] = useState([]);
    const [refresh, setRefresh] = useState(null);

    let uidNum;
    let cred;

    const LoginIn = async (email, password) => {
        const firebaseConfig = {
            apiKey: "AIzaSyB2bHLq_5ateDHJTJyAkXuh5d5DIOYwSq0",
            authDomain: "campquest-58c8a.firebaseapp.com",
            databaseURL: "https://campquest-58c8a-default-rtdb.firebaseio.com",
            projectId: "campquest-58c8a",
            storageBucket: "campquest-58c8a.appspot.com",
            messagingSenderId: "556299306138",
            appId: "1:556299306138:web:fc08db805d7b26e7d78b23",
            measurementId: "G-DQ9CN3X2S5"
        };

        //Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (cred) => {
                console.log(cred.user.uid);

                uidNum = cred.user.uid;

                let user = cred.user;
                console.log("cred_user", user)
                let res = await user.getIdTokenResult(false);

                setCurrentUser(user);
                localStorage.setItem("user", JSON.stringify(currentUser));

                let token = res.token;
                localStorage.setItem("firebaseResponse", JSON.stringify(res));
            })
            .catch(function (err) {
                // Handle Errors here.
                console.log(this)
                setCurrentUser(null);
                setErrors(err.response, false);
            });
        setInterval(() => {
            getRefresh(auth);
        }, 300000);
    }

    const signOut = async () => {
        setCurrentUser({});
        localStorage.removeItem("user");
        localStorage.removeItem("firebaseResponse");
        //stop token refresh
        clearInterval(refresh);
    }

    const SignUp = async (email, password) => {
        const firebaseConfig = {
            apiKey: "...",
            authDomain: "...",
            databaseURL: "...",
            projectId: "...",
            storageBucket: "...",
            messagingSenderId: "...",
            appId: "...",
            measurementId: "..."
        };

        //Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                //SignIn
                let user = userCredential.user;

                console.log("cred_user", user)
                let res = await user.getIdTokenResult(false);

                setCurrentUser(user);
                localStorage.setItem("user", JSON.stringify(currentUser));

                let token = res.token;
                localStorage.setItem("FireBaseResponse", JSON.stringify(res));

                const db = firebase.firestore();
                const userCollection = db.collection('User')
                const userId = user.uid

                await userCollection.doc(userId).set({
                    isAdmin: false,
                    uid: userId,
                    city: "",
                    createdAt: "",
                    email: email,
                    FirstName: "",
                    LastLogin: "",
                    LastName: "",
                    UniversityName: "",
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
            });
    }

    const getRefresh = (auth) => {
        auth.currentUser.getIdToken(true)
            .then((response) => {
                let fbResponse = localStorage.getItem("firebaseResponse");
                fbResponse = fbResponse ? JSON.parse(fbResponse) : {};
                fbResponse.token = response.id_token;
                localStorage.setItem("firebaseResponse", JSON.stringify(fbResponse));
            })
            .catch((err) => {
                console.log(err);
            });
    }
        return (
            <AuthContext.Provider value={{currentUser, errors, refresh, setErrors, setCurrentUser, signOut, SignUp, LoginIn}}>
                {children}
            </AuthContext.Provider>
        );
}

const AuthConsumer = AuthContext.Consumer;
export {AuthContext, AuthConsumer, AuthProvider};