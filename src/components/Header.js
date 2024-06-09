import "../App.css"

export default ({ black }) => {
    return (
        <header className={black ? "header-black" : ""}>
            <a href="/">
                <img className="header-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
                    alt="netflix-logo" />
            </a>

            <img className="header-user"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="user-image" />
        </header>
    )
}