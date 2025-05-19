import home from "../assets/home.png"
import short from "../assets/short.png"
import subs from "../assets/subs.png"
import arrow from "../assets/arrow.png"
import history from "../assets/history.png"
import playlist from "../assets/playlist.png"
import video from "../assets/video.png"
import course from "../assets/course.png"
import later from "../assets/later.png"
import like from "../assets/like.png"
import clip from "../assets/clip.png"
import trend from "../assets/trend.png"
import bag from "../assets/bag.png"
import music from "../assets/music.png"
import live from "../assets/live.png"
import game from "../assets/game.png"
import news from "../assets/news.png"


const SideBar = ()=>{
    return (
    <>
    <div className=" shadow-2xl w-auto md:w-58 p-5 m-2 h-160 overflow-y-auto no-scrollbar ">
    <ul className="">
    <li className="p-2 m-1 flex "><img className="w-5 object-contain mr-1" src={home} alt="home"/>Home</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={short} alt="Shorts"/>Shorts</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={subs} alt="subscribe"/>Subscription</li>
    </ul>
    <h1 className="font-bold pt-3 flex">You<img className="w-5 object-contain ml-1 mt-1" src={arrow} alt="arrow"/></h1>
    <div className="-mx-5">
    <ul className="p-2 m-2">
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={history} alt="history"/>History</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={playlist} alt="playlist"/>Playlist</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={video} alt="video"/>Your videos</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={course} alt="course"/>Your courses</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={later} alt="later"/>Watch Later</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={like} alt="like"/>Liked Videos</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={clip} alt="clip"/>Your Clips</li>
    </ul>
    </div>
    <h1 className="font-bold pt-3 flex">Explore<img className="w-5 object-contain ml-1 mt-1" src={arrow} alt="arrow"/></h1>
    <div className="-mx-5">
    <ul className="p-2 m-2">
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={trend} alt="trend"/>Trending</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={bag} alt="bag"/>Shopping</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={music} alt="music"/>Music</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={live} alt="live"/>Live</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={game} alt="game"/>Gaming</li>
    <li className="p-2 m-1 flex"><img className="w-5 object-contain mr-1" src={news} alt="news"/>News</li>
    </ul>
    </div>
    </div>
    </>
    )
}

export default SideBar;