
import {Link} from 'react-router-dom'
const Navbar=()=>{
 return (
    <div className="navbar">
        <h1 className="logo">The Dojo Blog</h1>
        <div className="links">
            <Link to="/"><h3>Home</h3></Link>
            </div>
            <div className="links">
            <Link to="/Create"><h3>New Blog</h3></Link>
        </div>

    </div>

  );
}
export default Navbar;
