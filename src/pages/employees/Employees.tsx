import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const e = localStorage.getItem('employees');
        if (e) {
            setEmployees(JSON.parse(e));
        }
    }, []);


    return (
        <div>

            {/* Space Between header and body */}
            <div className="space"></div>

            {/* All Employees List */}
            <div className='all-employees-list'>
                <div className="header-2 all-Employees-List">
                    <h4>Manage Employees</h4>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee: IEmployee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employeeEmail}</td>
                                <td>{employee.employeeAge}</td>
                                <td>
                                    <Link to={"/employee-details?id=" + employee.id}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Employees;

export interface IEmployee {
    id: number;
    employeeEmail: string;
    employeeAge: number;
}