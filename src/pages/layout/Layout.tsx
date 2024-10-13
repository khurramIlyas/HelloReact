import { Link, Outlet } from "react-router-dom";
import './layout.css';

function Layout() {
    return (
        <div className="layout">
            <div className="navigation">
                <h2>My Navigation</h2>
                <ul>
                    <li>
                        <Link to="">Home</Link>	
                    </li>
                    <li>
                        <Link to="employees">Employees</Link>	
                    </li>
                </ul>
            </div>

            {/* Container for all components */}
            <div className="my-outlet">
                <Outlet />
            </div>

            <footer>
                I'm footer section from Layout Component
            </footer>
        </div>
    )
}   

export default Layout;