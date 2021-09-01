import { ReactElement, ReactNode } from "react";



const Header = ( {children} : {children?: ReactNode} ) : ReactElement => {

    return (
        <header className="App-header">
        <span>Ubuntu 18.04.5 LTS tty1</span>
        <span>Press <b>CTRL</b><b>ALT</b><b>2</b> to change to window mode</span>
        <br/>
        <span>Consectetur irure ea cupidatat pariatur fugiat et labore ea anim excepteur duis sit.</span>
        <span>Ea laborum minim est quis ad Lorem reprehenderit. Laborum non esse officia ex pariatur aliquip cillum qui esse consequat consequat aliquip consectetur velit.</span>
        {children}
      </header>
    )
}

export default Header;