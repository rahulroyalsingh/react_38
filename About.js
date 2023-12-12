import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>A mobile app (or mobile application) is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.</p>
            <Link to ="/">Goto home Page</Link>
        </div>
    );
}
export default About