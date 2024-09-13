function Header() {
    return(
        <header>
            <img src="https://th.bing.com/th/id/R.f5b9918f76b778e799b6aa54c270061e?rik=nZ7mtnE0RGVzzQ&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f584830f5cef1014c0b5e4aa1.png&ehk=cBjMjnOtyQm1C35DQYKJHQvQ2KcknZXU8CMygKmPKlE%3d&risl=&pid=ImgRaw&r=0" alt="Logo do React" />
            <h1>Cabeçalho feito em React</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className="clear"></div>
        </header>
    );
}
export default Header;