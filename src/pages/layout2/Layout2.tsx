import { Link, Outlet } from "react-router-dom";
import './layout2.css';

function StudentLayout() {
    return (
        <div className="StudentLayout">
            <div className="navigation">
                <h2>My Navigation</h2>
                <ul>
                    <li>
                        <Link to="">Other</Link>	
                    </li>

                    <li>
                        <Link to="other2">Other 2</Link>	
                    </li>

                    <li>
                        <Link to="other3">Other 3</Link>	
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

export default StudentLayout;