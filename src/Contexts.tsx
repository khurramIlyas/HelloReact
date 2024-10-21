import { createContext, useState } from "react";
import TeacherLayout from "./pages/layout/Layout";
import StudentLayout from "./pages/layout2/Layout2";

export const globalContext = createContext();

export const GlobalConextProvider = ({ children }) => {
	const [ user, setUser] = useState({
		name: "Ehsan"
	});

	const [otherdata, setOtherdata] = useState("");

	return (
		<globalContext.Provider value={{ user, setUser }}>
			{ children }
		</globalContext.Provider>
	)
}

// ------------------------------
export const teacherContext = createContext();

export const TeacherConextProvider = () => {
	const [ user, setUser] = useState({
		name: "Ehsan"
	});

	const [otherdata, setOtherdata] = useState("");

	return (
		<globalContext.Provider value={{ user, setUser }}>
			<TeacherLayout />
		</globalContext.Provider>
	)
}

// ------------------------------
export const studentContext = createContext();

export const StudentConextProvider = () => {
	const [ user, setUser] = useState({
		name: "Ehsan"
	});

	const [otherdata, setOtherdata] = useState("");

	return (
		<globalContext.Provider value={{ user, setUser }}>
			<StudentLayout />
		</globalContext.Provider>
	)
}