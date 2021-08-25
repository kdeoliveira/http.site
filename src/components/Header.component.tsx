import { ReactElement, ReactNode } from "react";



const Header = ( {children} : {children?: ReactNode} ) : ReactElement => {

    return (
        <header className="App-header">
        <span>Ubuntu 18.04.5 LTS tty1</span>
        <span>Amet quis ex sit adipisicing veniam pariatur labore</span>
        {children}
      </header>
    )
}

export default Header;