import { useEffect, useRef, useState } from "react";
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
            if(e) {
                const employeesList = JSON.parse(e)
                employeesList.map((employee: IEmployee) => {
                    if(employee.id === employeeId) {
                        setEmployee(employee);
                    }
                })
            }
        }
    }, []);

    

    return (
        <div>
            <div className="employe-detail">
                <h3>Employee Detail of <span className="text-primary">{employee ? employee.name : 'Unknown'}</span></h3>

                { // ts
                    (employee !== undefined) ? ( //if condition true / THEN
                        <ul>
                            <li>ID: {employee.id}</li>
                            <li>Name: {employee.name}</li>
                            <li>Age: {employee.age}</li>
                            <li>Phone #: {employee.phone}</li>
                        </ul>
                    ) : (// if condition false / ELSE
                        <p>Employee data not available</p>
                    )
                } 
            </div>
            
        </div>
    );
}

export default EmployeeDetails;
