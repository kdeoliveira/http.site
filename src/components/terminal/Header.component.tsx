import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";



const Header = ( {children} : {children?: ReactNode} ) : ReactElement => {

    return (
        <header className="App-header">
        <span>kevindeoliveira.com 1.0.1 &copy; All rights reserved </span>
        <span>Press <b>CTRL</b><b>ALT</b><b>2</b> to change to window mode or click <Link to={"/window"}>here</Link></span>
        <br/>
        <span>This application is still under developement. Some commands may not be available</span>
        <span>Type help to see the list of available commands</span>
        <span>You can access the source code of this webiste <a target={"_blank"} rel="noreferrer" href="https://github.com/kdeoliveira/http.site">on github</a></span>
        {children}
      </header>
    )
}

export default Header;