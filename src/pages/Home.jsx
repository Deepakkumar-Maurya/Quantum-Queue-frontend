import Navbar from "../components/Navbar";
import GamesBox from "../components/GamesBox";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar isHomePage={true} logoTxtSrc="/logo-txt.svg" logoImgSrc="" />

            {/* P2P Introduction description */}
            <div className="w-full flex gap-4 sm:px-5 px-14 mt-14">
                <div className="sm:w-1/2">
                    <h1 className="text-2xl md:text-5xl text-secondary text-center">
                        Your Game, Your Way: A Multiverse of P2P Matches Awaits
                    </h1>
                    <h2 className="text-xl md:text-3xl text-white text-center mt-10">
                        Connect directly with other players for lag-free,
                        fast-paced competition
                    </h2>
                    <p className="text-lg md:text-xl hidden sm:block text-slate-200 text-center mt-5">
                        Showcase a dynamic image or video montage of players
                        enjoying various P2P games on the platform
                    </p>
                </div>
                <div >
                    <img className="hidden sm:block" src="" alt="" />
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
