
import axios, {isCancel, AxiosError} from 'axios';
import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../../Contexts';

function Home () {
    const { user} = useContext(globalContext);


    const backendBaseUrl = 'https://reqres.in/';
    const [users, setUsers] = useState([]);

    useEffect(() => {   
        const usersReq = axios.get(backendBaseUrl + 'api/users', {
            params: {
                page: 1
            }
        });

        usersReq.then( (response) => {
            if (response.status == 200) {
                setUsers(response.data.data);
            } else {
                console.log('Something is wrong with backend server');
            }
        });
    }, []);


    const creatUser = () => {   
        const req = axios.post(backendBaseUrl + 'api/users', {
            body: {
                name: 'Ehsan',
                job: 'Software Developer'
            }
        })
    }

    const updateUser = () => {   
        const req = axios.put(backendBaseUrl + 'api/users/2', {
            body: {
                name: 'Ehsan',
                job: 'Software Developer'
            }
        })
    }

    return (
        <div>
            <h4>Home Component - Users { user.name }</h4>
            <div className="btn btn-primary" onClick={creatUser}>Create User</div>
            <div className="btn btn-primary" onClick={updateUser}>Update User</div>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}>{user.id} -- {user.first_name} {user.last_name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Home;