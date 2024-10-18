import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

const Context = (props) => {
    const [users, setusers] = useState([
        { username: "Sharid Ansari", skill: "MERN stack" },
    ]);

    const [username, setusername] = useState("");
    const [skill, setskill] = useState("");

    const [active, setActive] = useState(null);

    const { children } = props;
    
    return (
        <UserContext.Provider
            value={{
                users,
                setusers,
                username,
                setusername,
                skill,
                 setskill,
                active,
                setActive,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default Context;