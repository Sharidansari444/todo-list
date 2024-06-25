import { useContext } from "react";
import "../global.css";
import { UserContext } from "../utils/Context";
const Create = () => {
    const {
        users,
        setusers,
        active,
        setActive,
        username,
        setusername,
        skill,
        setskill,
    } = useContext(UserContext);

    const SubmitHandler = (event) => {
        event.preventDefault();
        const user = { username, skill };

        // const copyusers = [...users];
        // copyusers.push(user);
        // setusers(copyusers);
        setusers([...users, user]);
        setusername("");
        setskill("");
    };

    const UpdateHandler = (e) => {
        e.preventDefault();
        const copyusers = [...users];
        copyusers[active] = { ...copyusers[active], username, skill };
        setusers(copyusers);
        setusername("");
        setskill("");
        setActive(null);
    };

    return (
        <form className="container">
            <input
                className="form-control"
                style={
                    {
                        padding: "0.5vmax",
                        borderRadius: "5px",
                        marginRight: "10px"

                    }
                }
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="text"
                placeholder="Enter Title here"
            />
            <input
                className="form-control"
                style={
                    {
                        padding: "0.5vmax",
                        borderRadius: "5px",
                    }
                }
                onChange={(e) => setskill(e.target.value)}
                value={skill}
                type="text"
                placeholder="Enter Description here"
            />

            {active === null ? (
                <button
                    onClick={SubmitHandler}
                 
                    style={{
                        backgroundColor: " rgb(24, 226, 237)",
                        color: "white",
                        border: "none",
                        padding: "1vmax",
                        borderRadius: "10px",
                        marginLeft: "10px",
                        fontSize:"15px",
                        fontWeight:"800"
                    }}
                >
                    Add Task
                </button>
            ) : (
                <button
                    onClick={UpdateHandler}
                    
                    style={{
                        background: " lightgreen",
                        color: "green   ",
                        border: "none",
                        borderRadius: "5px",
                        padding: "1vmax",
                        marginLeft: "10px"
                    }}
                >
                    Update
                </button>
            )}
        </form>
    );
};

export default Create;  