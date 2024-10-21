import { BrowserRouter, Route, Routes } from "react-router-dom"
import Employees from "./pages/employees/Employees"
import Other from "./pages/other/Other"
import Other2 from "./pages/other2/Other2"
import Other3 from "./pages/other3/Other3"
import EmployeeDetails from "./pages/employee-details/EmployeeDetails"
import Home from "./pages/home/Home"
import AddEditEmployee from "./pages/add-edit-employee/add-edit-employee"
import TeacherLayout from "./pages/layout/Layout"
import StudentLayout from "./pages/layout2/Layout2"
import { GlobalConextProvider, StudentConextProvider, TeacherConextProvider } from "./Contexts"

function App() {
	return (
		<GlobalConextProvider>
			<BrowserRouter>
				<Routes>
					{/* TeacherLayout Component Routing Starts here */}
					<Route path="/" element={<TeacherConextProvider />}>
						<Route index element={ <Home /> } />
						<Route path="employees" element={ <Employees /> } />
						<Route path="employee-details" element={ <EmployeeDetails /> } />
						<Route path="add-employee" element={ <AddEditEmployee /> } />
					</Route>
					{/* TeacherLayout Component Routing Ends here */}


					{/* Other Routes */}
					<Route path="/student" element={ <StudentConextProvider /> }>
						<Route index element={ <Other /> } />
						<Route path="other2" element={ <Other2 /> } />
						<Route path="other3" element={ <Other3 /> } />
					</Route>
				</Routes>


			</BrowserRouter>
		</GlobalConextProvider>
	)

	
}


export default App