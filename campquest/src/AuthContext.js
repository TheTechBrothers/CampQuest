import React, {Component, useEffect, useRef} from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import axios from "axios";
import {initializeApp} from "firebase/app";


const AuthContext = React.createContext({
    currentUser: {},
    setCurrentUser: ()=>{},
    isLoggedIn: false,
    LoginIn: () =>{},
    Sign : () =>{},
    signOut : () => {},
    setErrors: () => {}
});

export class AuthProvider extends Component {
    uidNum;
    cred;


    state = {
        currentUser: {},
        allUsers: {},
        setErrors: (errObject, append) => {
            if (append) {
                let e = this.state.errors;
                e.push(errObject);
                this.setState({errors: e});
            } else {
                this.setState({errors: [errObject]});
            }
        },
        setCurrentUser: user => {
            this.setState({currentUser: user})
        },

        LoginIn: async (email, password) => {
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

            const  auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                . then(async (cred)=> {
                    console.log(cred.user.uid);

                    this.uidNum = cred.user.uid;


                    let user = cred.user;
                    console.log("cred_user",user)
                    let res = await user.getIdTokenResult(false);

                    this.state.setCurrentUser(user);
                    localStorage.setItem("user", JSON.stringify(this.state.currentUser));


                    let token = res.token;
                    localStorage.setItem("firebaseResponse", JSON.stringify(res));
                })
                .catch(function (err) {
                    // Handle Errors here.
                    console.log(this)
                    this.setCurrentUser(null);
                    this.setErrors(err.response, false);
                });
            setInterval(this.getRefresh, 300000, auth)
        },
        signOut: async ()=>{
            // await axios.get("http://localhost:3000/logout").then( res =>{
            this.state.setCurrentUser({});
            localStorage.removeItem("user");
            localStorage.removeItem("firebaseResponse");
            //stop token refresh
            clearInterval(this.state.refresh );
            // }).catch(err => console.log(err));
        },

        Sign: async (email, password) =>{
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

            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    //SignIn
                    let user = userCredential.user;

                    console.log("cred_user", user)
                    let res = await user.getIdTokenResult(false);

                    this.state.setCurrentUser(user);
                    localStorage.setItem("user", JSON.stringify(this.state.currentUser));

                    let token = res.token;
                    localStorage.setItem("FireBaseResponse", JSON.stringify(res));

                    const  db = firebase.firestore();
                    const  userCollection = db.collection('User')
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
        },

        }

        getRefresh(auth) {
            auth.currentUser.getIdToken(true).then((response)=>{
                let fbResponse = localStorage.getItem("firebaseResponse")
                fbResponse = (fbResponse ? JSON.parse(fbResponse) : {})
                fbResponse.token = response.id_token;
                localStorage.setItem("firebaseResponse", JSON.stringify(fbResponse))
            }).catch((err) => {
                console.log(err);
            })

        }
render() {

    const {children} = this.props
    const {currentUser, errors, refresh, setErrors, setCurrentUser, signOut, Sign, LoginIn} = this.state

    return (
        <AuthContext.Provider value={{currentUser, errors, refresh, setErrors, setCurrentUser, signOut, Sign, LoginIn}}>
            {children}
        </AuthContext.Provider>
    );
}
}
















const AuthConsumer = AuthContext.Consumer;
export {AuthContext, AuthConsumer};