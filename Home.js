import { Link } from "react-router-dom";


function Home(){
    return(
        <div>
            <h1>Home Page!</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
           <Link to ="/">Go to About Page</Link>
        </div>
    );
}
export default Home