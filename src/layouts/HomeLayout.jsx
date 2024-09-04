import React from "react";
import { useMemo } from "react";
import Home from "../Pages/Home";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import { useState } from "react";

export default function HomeLayout(){
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() =>{
        getCurrentUser(setCurrentUser);
    },[])
    return(
        <div>
            <Topbar currentUser={currentUser}/>
            <Home currentUser={currentUser}/>
        </div>
    )
}