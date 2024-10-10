import { Link, Outlet } from "react-router-dom";
import './layout.css';

function Layout() {
    return (
        <div className="layout">
            <div className="navigation">
                <h2>My Navigation</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>	
                    </li>

                    <li>
                        <Link to="/countries">Countries List</Link>	
                    </li>

                    <li>
                        <Link to="/test">Test</Link>	
                    </li>
                </ul>
            </div>

            {/* Container for all components */}
            <div className="my-outlet">
                <h2>My Outlet</h2>
                <Outlet />
            </div>

            <footer>
                I'm footer section from Layout Component
            </footer>
        </div>
    )
}   

export default Layout;