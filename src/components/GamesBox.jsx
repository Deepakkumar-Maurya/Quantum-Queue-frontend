import PropTypes from "prop-types";

const GamesBox = ({ imgsrc }) => {
    return (
        <>
            <div>
                <img src={imgsrc} alt="" />
            </div>
        </>
    );
};

GamesBox.propTypes = {
    imgsrc: PropTypes.string.isRequired,
};

export default GamesBox;
