import React, { useContext } from "react";
import { UserContext } from "../utils/Context";

const Show = () => {
    const { active, users, setusers, setActive, setusername, setskill } =
        useContext(UserContext);

    const ActiveHandler = (i) => {
        console.log(i)
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
        
        <div className="container ">

            <div className="d-flex h-100 mt-5 flex-column " >
               
                <div className=' table-responsive'>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead className=' table-d '>
                            <tr>
                                <th>Name</th>
                                <th>Skills</th>
                                <th>Update</th>
                                <th>Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((currUser, index) => {
                                return (
                                    <tr key={index}>
                                    <td>{currUser.username}</td>
                                    <td>{currUser.skill}</td>
                                    {active === null && (
                                        <   >

                                  <td><button   className='btn btn-outline-secondary' onClick={() => ActiveHandler(index)}>Update</button></td>  
                                    <td><button className='btn btn-outline-danger'onClick={() => DeleteHandler(index)}>
                                        Delete
                                    </button></td>
                                        </>
                                        
                                    )}
                                </tr>
                                )
                                
                            })}
                        </tbody>
                    </table>

                </div>

            </div>



        </div>

    );
};

export default Show;