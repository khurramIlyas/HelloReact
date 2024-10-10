import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CountriesList from "./pages/countries/CountriesList"
import Test from "./pages/test/Test"
import Home from "./pages/home/Home"
import Layout from "./pages/layout/Layout"
import Other from "./pages/other/Other"
import Other2 from "./pages/other2/Other2"
import Other3 from "./pages/other3/Other3"
import Layout2 from "./pages/layout2/Layout2"

function App() {
	return (
		
		<BrowserRouter>
			<Routes>
				{/* Layout Component Routing Starts here */}
				<Route path="/" element={<Layout />}>
					<Route index element={ <Home /> } />
					<Route path="countries" element={ <CountriesList /> } />
					<Route path="test" element={ <Test /> } />
				</Route>
				{/* Layout Component Routing Ends here */}


				{/* Other Routes */}
				<Route path="/layout2" element={ <Layout2 /> }>
					<Route index element={ <Other /> } />
					<Route path="other2" element={ <Other2 /> } />
					<Route path="other3" element={ <Other3 /> } />
				</Route>
			</Routes>


		</BrowserRouter>
	
	)
}

export default App