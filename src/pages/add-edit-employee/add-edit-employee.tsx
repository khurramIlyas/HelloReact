import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { IEmployee } from "../employees/Employees";

function AddEditEmployee() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	let [employeesArray, setEmployeesArray] = useState<Array<IEmployee>>([]);

	let [employeeId, setEmployeeId] = useState(0);
	let empId = useRef(0);

	useEffect(() => {
		if (localStorage.getItem('employees')) {
			setEmployeesArray(JSON.parse(localStorage.employees));
		}

		if (localStorage.getItem('id')) {
			empId.current = parseInt(localStorage.id);
		}
		else {
			localStorage.setItem('id', '0');
		}
	}
		, []);
	const ehsan = (data: any) => {
		empId.current++;
		setEmployeeId(empId.current);
		localStorage.setItem('id', JSON.stringify(empId.current));
		data.id = empId.current;
		employeesArray.push(data);
		const newData = [...employeesArray];
        setEmployeesArray(newData);
        localStorage.setItem('employees', JSON.stringify(newData));
	}

	return (
		<div>
			<div className="input-field-main-div">
				<div className="header-input-field">
					<h4>Update Employee</h4>
				</div>
				<form onSubmit={handleSubmit(ehsan)}>
					{/* email */}
					<div className="row mb-3">
						<label className="col-sm-2">Email</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								{...register("employeeEmail", {
									required: true,
									minLength: 3,
									maxLength: 40,
								})}
							/>
							<div className="errors">{errors.employeeEmail && "Email me koi masla hy"}</div>
						</div>
					</div>

					{/* age */}
					<div className="row mb-3">
						<label htmlFor="age" className="col-sm-2 col-form-label">
							Age
						</label>
						<div className="col-sm-10">
							<input
								type="number"
								className="form-control"
								id="age"
								{...register("employeeAge", {
									required: { value: false, message: 'Age is required' },
									min: { value: 5, message: 'Age must be greater than 5' }
								})}
							/>
							<div className="errors">
								{errors.employeeAge && <span style={{ color: "red" }}>{errors.employeeAge.message}</span>}
							</div>
						</div>
					</div>

					<button type="submit" className="btn btn-success mx-auto">
						Submit Form
					</button>
				</form>
			</div>
		</div>
	)
}

export default AddEditEmployee
