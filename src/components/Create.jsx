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
        console.log(copyusers)
    };

    return (
        <form className="container d-flex">
            <input
                className="form-control w-25 "
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="text"
                placeholder="Enter Title here"
            />
            <input
                className="form-control w-25 ms-3"


                onChange={(e) => setskill(e.target.value)}
                value={skill}
                type="text"
                placeholder="Enter Description here"
            />

            {active === null ? (
                <button
                    className="btn btn-outline-warning ms-2 "
                    onClick={SubmitHandler}

                >
                    Add Task
                </button>
            ) : (
                <button
                    className="btn btn-outline-success"
                    onClick={UpdateHandler}

                >
                    Update
                </button>
            )}
        </form>
    );
};

export default Create;  