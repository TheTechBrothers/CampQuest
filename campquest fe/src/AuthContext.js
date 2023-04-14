import React, {createContext, useState} from "react";

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

    const setCurrentUser = (user) => setCurrentUser(user)

    const login = (email, password) => {
        //Tod add firebase login in with backend token
        setCurrentUser(fakeUser);
        setIsLoggedIn(true);
    }

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