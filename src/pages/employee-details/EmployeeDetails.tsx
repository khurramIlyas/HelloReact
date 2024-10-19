import { useEffect,useState } from "react";
import { IEmployee } from "../employees/Employees";
import './EmployeeDetails.css';
import { useSearchParams } from "react-router-dom";

function EmployeeDetails() {
    const [employee, setEmployee] = useState<IEmployee>();
    const [queryParams, setQueryParams] = useSearchParams();

    useEffect(() => {
        const employeeId = Number(queryParams.get('id'));

        if (localStorage.getItem('employees')) {
            const e = localStorage.getItem('employees');
            if (e) {
                const employeesList = JSON.parse(e)
                employeesList.map((employee: IEmployee) => {
                    if (employee.id === employeeId) {
                        setEmployee(employee);
                    }
                })
            }
        }
    }, []);



    return (
        <div>
            <div className="emp-list">
                <div className="employees-List div">
                    <div className="header-2 Employee-List">
                        <h4>View Employees Information </h4>
                    </div>
                    { // ts
                        (employee !== undefined) ? ( //if condition true / THEN
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td><label><b>ID</b></label></td>
                                        <td>{employee.id}</td>
                                    </tr>
                                    <tr>
                                        <td><label><b>Email</b></label></td>
                                        <td>{employee.employeeEmail}</td>
                                    </tr>
                                    <tr>
                                        <td><label><b>Age</b></label></td>
                                        <td>{employee.employeeAge}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (// if condition false / ELSE
                            <p>Employee data not available</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;
