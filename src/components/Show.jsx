import React, { useContext } from "react";
import { UserContext } from "../utils/Context";

const Show = () => {
    const { active, users, setusers, setActive, setusername, setskill } =
        useContext(UserContext);

    const ActiveHandler = (i) => {
        setActive(i);
        setusername(users[i].username);
        setskill(users[i].skill);
    };
    
    const DeleteHandler = (i) => {
        const copyusers = [...users];
        copyusers.splice(i, 1);
        setusers(copyusers);
        
   
        // setusers(users.filter((e, idx) => idx !== i));
    };

    return (
        <ul>
        {users.map((e, i) => {
                return (
                    <li key={i}>
                       <h5> {e.username} </h5>
                         <h5>{e.skill}</h5>
                        {active === null && (
                            
                            <span>
                                <button style={{ background:"lightgreen", padding:".5vmax",  color:"green", border:"1px solid white" }} onClick={() => ActiveHandler(i)}>Update</button>
                                <button style={{ background:"red", padding:".5vmax",  color:"white  ", marginLeft:"10px" ,border:"1px solid"  }} onClick={() => DeleteHandler(i)}>Delete</button>
                            </span> 
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Show;