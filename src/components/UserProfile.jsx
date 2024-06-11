import PropTypes from "prop-types";

const UserProfile = ({
    userimg,
    userName,
    points,
    level,
    gamesPlayed,
    gamesWon,
    gamesLost,
}) => {
    return (
        <>
            <div className="border-2 border-primary rounded-lg p-4">
                <img className="h-28 w-28" src={userimg} alt="" />
                <h1>{userName}</h1>
            </div>
            {/* <div>
                <ul>
                    <li>Points</li> : <li>{points}</li>
                </ul>
                <ul>
                    <li>Level</li> : <li>{level}</li>
                </ul>
                <ul>
                    <li>Games Played</li> : <li>{gamesPlayed}</li>
                </ul>
                <ul>
                    <li>Games Won</li> : <li>{gamesWon}</li>
                </ul>
                <ul>
                    <li>Games Lost</li> : <li>{gamesLost}</li>
                </ul>
            </div> */}
            <div className="stats">
                <table>
                    <tr>
                        <td>Points</td> : 
                        <td>{points}</td>
                    </tr>
                    <tr>
                        <td>Level</td> : 
                        <td>{level}</td>
                    </tr>
                    <tr>
                        <td>Games Played</td> : 
                        <td>{gamesPlayed}</td>
                    </tr>
                    <tr>
                        <td>Games Won</td> :  
                        <td>{gamesWon}</td>
                    </tr>
                    <tr>
                        <td>Games Lost</td> : 
                        <td>{gamesLost}</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

UserProfile.propTypes = {
    userimg: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    gamesPlayed: PropTypes.number.isRequired,
    gamesWon: PropTypes.number.isRequired,
    gamesLost: PropTypes.number.isRequired,
};

export default UserProfile;
