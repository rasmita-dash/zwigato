import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:{
        userName: "Default"
    }
});

export default UserContext;