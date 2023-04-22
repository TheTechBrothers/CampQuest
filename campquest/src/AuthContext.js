import React, {createContext, useState} from "react";
import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import axios from "axios";

const AuthContext = createContext({
    currentUser: {},
    setCurrentUser: ()=>{},
    isLoggedIn: false,
    login: () =>{}
});

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setUser] = useState(null);

    const fakeUser = {
        "userId": "0be54mNGH94LikcFC893",
        "City":"",
        "CreatedAt":"",
        "Email":"",
        "FirstName":"",
        "LastLogin":"",
        "LastName":"",
        "UniversityName":"",
    };

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

    initializeApp(firebaseConfig);
    const auth = getAuth();


    const setCurrentUser = (user)=>{
        setUser(user);
    }
    const login = async (email, password) => {

        await signInWithEmailAndPassword(auth,email, password).then(
            async cred => {
                let user = cred.user;
                let res = await user.getIdTokenResult(false);
                let token = res.token;

                let headers = {"Authorization": "Bearer " + token}
                await axios.post('http://localhost:8080/api/login', {
                    "email": email, "password": ""
                }, {
                    headers: headers,
                    context: document.body
                }).then((response) => {
                    setCurrentUser(response.data.user)
                    setIsLoggedIn(true);
                    localStorage.setItem("authorize", response.headers.get("X-Auth-Token"));
                    localStorage.setItem("currentUser", JSON.stringify(response.data.user));
                }).catch(e => {
                    console.log(e)
                })


            }).catch(e => console.log(e))




    };

    const register = async (username, password) => {
        try {
            await createUserWithEmailAndPassword(username, password);
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        const signOut = () => {

        };
        try {
            await signOut();
            setIsLoggedIn(false);
            // Do something else here, like clear the token from local storage
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isLoggedIn,
                setCurrentUser,
                login
            }} >

        </AuthContext.Provider>

    );

}

const AuthConsumer = AuthContext.Consumer;
export {AuthContext, AuthConsumer, AuthProvider};