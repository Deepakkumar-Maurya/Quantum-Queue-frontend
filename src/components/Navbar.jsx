import PropTypes from "prop-types";

const Navbar = ({ isHomePage, logoName, logoImgSrc }) => {
    return (
        <nav className="navbar">
            <div>
                <img src={logoImgSrc} alt="" />
                <h1 className="text-primary">{logoName}</h1>
            </div>
            <div>
                <ul className="navul">
                    <li className="navlinks">About-Us</li>
                    <li className="navlinks">Services</li>
                </ul>
            </div>
            <div>
                {isHomePage ? (
                    <>
                        <div className="flex gap-6 items-center justify-end flex-wrap">
                            <button className="navbar-btn">Signup</button>
                            <button className="navbar-btn">Login</button>
                        </div>
                    </>
                ) : (
                    <button className="navbar-btn">Logout</button>
                )}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    isHomePage: PropTypes.bool.isRequired,
    logoName: PropTypes.string.isRequired,
    logoImgSrc: PropTypes.string.isRequired,
};

export default Navbar;
