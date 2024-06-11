import Navbar from "../components/Navbar";
import GamesBox from "../components/GamesBox";
import UserProfile from "../components/UserProfile";

const UserDashboard = () => {
    return (
        <>
            <Navbar isHomePage={false} logoName="Quantum Queue" logoImgSrc="" />
            <div className="w-full flex gap-4">
                <div className="w-1/6">
                    <UserProfile
                        userimg="/profile-img.svg"
                        userName="Deepak Maurya"
                        points="100"
                        level="Pro"
                        gamesPlayed="123"
                        gamesWon="120"
                        gamesLost="3"
                    />
                </div>

                <div className="w-5/6 overflow-y-auto max-h-[91vh]">
                    {/* Trending Games  */}
                    <div>
                        <h1>Trending Games</h1>
                        <div className="flex gap-4">
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                        </div>
                    </div>

                    {/* All Games */}
                    <div>
                        <h1>All Games</h1>
                        <div className="grid grid-cols-4 gap-4">
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />

                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />

                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                            <GamesBox imgsrc="/hero-img.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
