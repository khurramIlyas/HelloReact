import { useContext } from "react"
import { useForm } from "react-hook-form"
import { globalContext } from "../../Contexts";

function AddEditEmployee() {

    const {user, setUser} = useContext(globalContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const ehsan = (data: any) => {
		console.log("Data Received", data)
	}

    const changeName = (newName) => {
		setUser({
            name: newName
        })
    }

	return (
		<div>
			<h1>Add/Edit Employee { user.name }</h1>
            <button onClick={() => changeName("Fahad")}>Change Name</button>
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
								required: { value: false, message: 'Age is required'},
								min: { value: 5, message: 'Age must be greater than 5' }
							})}
						/>
						<div className="errors">
							{errors.employeeAge && <span style={{ color: "red" }}>{errors.employeeAge.message}</span>}
						</div>
					</div>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit Form
				</button>
			</form>
		</div>
	)
}

export default AddEditEmployee
