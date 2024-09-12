import PropTypes from "prop-types";

const Navbar = ({ isHomePage, logoTxtSrc, username="Guest-User" }) => {
    return (
        <nav className="navbar">
            <div>
                {/* <img className="h-10 w-10" src={logoImgSrc} alt="" /> */}
                {/* <h1 className="text-primary">{logoName}</h1> */}
                <img className="h-10 w-40" src={logoTxtSrc} alt="" />
            </div>
            <div>
                <ul className="navul">
                    <li className="navlinks hidden sm:block">About-Us</li>
                    <li className="navlinks hidden sm:block">Services</li>
                </ul>
            </div>
            <div>
                {isHomePage ? (
                    <>
                        <div className="flex gap-6 items-center justify-end flex-wrap">
                            <button className="navbar-btn hidden sm:block">Signup</button>
                            <button className="navbar-btn hidden sm:block">Login</button>
                            <button className="navbar-btn sm:hidden">Register</button>
                        </div>
                    </>
                ) : (
                    // <button className="navbar-btn">Logout</button>
                    <div className="flex gap-3 items-center justify-end flex-wrap">
                        <div className="navbar-btn py-1 cursor-pointer hidden sm:flex gap-2 items-center">
                            <div>
                                <p style={{ fontSize: "8px" }}>Welcome</p>
                                <p style={{ fontSize: "12px" }}>{username}</p>
                            </div>
                            <img src="/dropdown.svg" alt="" />
                        </div>
                        <button className="h-10 w-10 bg-primary rounded-full px-2 "><img src="/notification.svg" alt="" /></button>
                        <button className="navbar-btn sm:hidden"><img src="/menu.svg" alt="" /></button>
                    </div>
                )}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    isHomePage: PropTypes.bool.isRequired,
    // logoName: PropTypes.string.isRequired,
    logoImgSrc: PropTypes.string.isRequired,
    logoTxtSrc: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default Navbar;
