import { Link } from "react-router-dom"

const NotFound=()=>{
    return(


<div>
<h2>Sorry!!</h2>
<p>Page not Found</p>
<Link to="/"><h3>Back to home page...</h3></Link>
 </div>
    );
}
export default NotFound;