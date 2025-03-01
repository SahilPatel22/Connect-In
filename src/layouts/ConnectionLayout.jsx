import React from "react";
import { useMemo } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import { useState } from "react";
import Connections from "../Pages/Connections";

export default function ConnectionLayout(){
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() =>{
        getCurrentUser(setCurrentUser);
    },[])
    return(
        <div>
            <Topbar currentUser={currentUser}/>
            <Connections currentUser={currentUser}/>
        </div>
    )
}