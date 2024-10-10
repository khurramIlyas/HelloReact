import { Link } from "react-router-dom";

function CountriesList() {
    return (
        <div>
            <h1>Countries List Component</h1>

            <div className="naviations">
            <Link to="/">Home</Link>	
			</div>
        </div>
    );
}

export default CountriesList;