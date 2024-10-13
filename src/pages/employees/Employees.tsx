import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {   
        const e = localStorage.getItem('employees');
        if(e) {
            setEmployees(JSON.parse(e));
        }
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee: IEmployee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.phone}</td>
                            <td>
                                <Link to={"/employee-details?id="+employee.id}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;

export interface IEmployee {
    id: number;
    name: string;
    age: number;
    phone: string;
}