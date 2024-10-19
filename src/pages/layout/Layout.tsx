import { Link, Outlet } from "react-router-dom";
import './layout.css';

function Layout() {
    return (
        <div className="div">
            {/*  Header of Department page  */}
            <div className="header">
                <div className="home_icon">
                    <i className="fa-solid fa-house-chimney"></i>
                </div>
                <div className="user_icon">
                    <i className="fa-solid fa-user"></i> <h5>Department Managment</h5>
                </div>
            </div>

            <div className="NaveBar">
                <div className="logo">
                    EMPLOYEES CRUD
                </div>
                <div className="links">
                    <Link to="" style={{ textDecoration: 'none' }}><span>Home</span></Link>
                    <Link to="employees" style={{ textDecoration: 'none' }}><span>Employees List</span></Link>
                    <Link to="add-employee" style={{ textDecoration: 'none' }}><span>Add Employee</span></Link>
                </div>
            </div>
            <div className="body">
                <Outlet></Outlet>
            </div>
            <footer>
                <span>&copy; 2024 My Simple Web Page</span>
            </footer>
        </div>
    )
}

export default Layout;