import { Link } from "react-router-dom";
import './Links.css';

const Links = () => {

    return (
        <>
            <div className="links">
                <Link to="https://github.com/louise-elliott-work" target="_blank"><img className="github" src="/github.svg"/></Link>
                <Link to="https://www.linkedin.com/in/louise-elliott-work/" target="_blank"><img className="linkedin" src="/linkedin.svg"/></Link>
                <Link to="louise.elliott.work@gmail.com" target="_blank"><img className="envelope" src="/envelope.svg"/></Link>                             
            </div>
        </>
    )

}

export default Links;