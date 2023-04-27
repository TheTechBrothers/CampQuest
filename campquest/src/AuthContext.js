import React, { useState } from "react";
import {initializeApp} from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import axios from "axios";

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
       initializeApp(firebaseConfig);

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

    const SignUp = async (email, password, firstName, lastName, university) => {

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
        initializeApp(firebaseConfig);

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

                //axios call

                let data = JSON.stringify({
                    "email": email,
                    "firstName": firstName,
                    "lastName": lastName,
                    "universityName": university,
                    "uid": user.uid
                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/register/',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data : data
                };

                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch((error) => {
                        console.log(error);
                    });


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //alert(errorCode);
                //alert(errorMessage);
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