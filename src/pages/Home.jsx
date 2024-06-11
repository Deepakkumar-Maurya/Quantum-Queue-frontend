import Navbar from "../components/Navbar";
import GamesBox from "../components/GamesBox";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar isHomePage={true} logoName="Quantum Queue" logoImgSrc="" />

            {/* P2P Introduction description */}
            <div>
                <div>
                    <h1>
                        Your Game, Your Way: A Multiverse of P2P Matches Awaits
                    </h1>
                    <h2>
                        Connect directly with other players for lag-free,
                        fast-paced competition
                    </h2>
                    <p>
                        Showcase a dynamic image or video montage of players
                        enjoying various P2P games on the platform
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>

            {/* Games Section  */}
            <div>
                <GamesBox imgsrc={"#"} />
                <GamesBox imgsrc={"#"} />
                <GamesBox imgsrc={"#"} />
            </div>

            {/* Footer Section  */}
            <Footer logoName="Quantum Queue" />
        </>
    );
};

export default Home;
