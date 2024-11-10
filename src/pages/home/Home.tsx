import axios, { isCancel, AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../Contexts";
import _ from "lodash";
import store from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions"

function Home() {
    const { user } = useContext(globalContext);
    
    // Read
    const count = useSelector((state: any) => {
        return state.count
    }); // Access Redux state


    // Write
    const dispatcher = useDispatch();
    dispatcher({ type: 'Add', mydata: {} });



    const backendBaseUrl = "https://reqres.in/";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        store.subscribe(() => {
            console.log("store changed", store.getState());
        });





        console.log("output", store.getState());
        store.dispatch({
            type: "bugAdded",
            payload: {
                description: "Bug 1",
            },
        });
        console.log("output", store.getState());

        const usersReq = axios.get(backendBaseUrl + "api/users", {
            params: {
                page: 1,
            },
        });

        usersReq.then((response) => {
            if (response.status == 200) {
                setUsers(response.data.data);
            } else {
                console.log("Something is wrong with backend server");
            }
        });
    }, []);

    const creatUser = () => {
        const req = axios.post(backendBaseUrl + "api/users", {
            body: {
                name: "Ehsan",
                job: "Software Developer",
            },
        });
    };

    const updateUser = () => {
        const req = axios.put(backendBaseUrl + "api/users/2", {
            body: {
                name: "Ehsan",
                job: "Software Developer",
            },
        });
    };

    return (
        <div>
            <h4>Home Component - Users {user.name}</h4>
            <div>
                <button onClick={() => dispatcher({ type:  })}>
                <h1>{count}</h1>
                    Increment
                </button>
                <button onClick={() => dispatcher({ type: "bugRemoved", payload: { id: 1 } })}>
                    Decrement
                </button>
            </div>

            <br />
            <hr />
            <br />

            <div className="btn btn-primary" onClick={creatUser}>
                Create User
            </div>
            <div className="btn btn-primary" onClick={updateUser}>
                Update User
            </div>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            {user.id} -- {user.first_name} {user.last_name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;
