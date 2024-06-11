import PropTypes from "prop-types";

const Footer = ({ logoName }) => {
    return (
        <>
            <div>
                <div>
                    <h1>{logoName}</h1>
                </div>
                <div></div>
            </div>
            <div></div>
        </>
    );
};

Footer.propTypes = {
    logoName: PropTypes.string.isRequired,
};

export default Footer;
