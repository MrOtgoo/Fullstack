import Hometeamwork from "./subPages/hometeamwork";
import HomeTop from "./subPages/HomeTop";
import HometaskSecond from "./subPages/homeTasks";
import HomeTasks2 from "./subPages/homeTasks2";
import HomeTestimonials from "./subPages/homeTasks-testimonel"
import Footer from "../components/Footer";
const HomePage = (props) => {
  return (
    <div>
      <HomeTop  user={props.user}/>
      <Hometeamwork />
      <HometaskSecond/>
      <HomeTasks2/>
      <HomeTestimonials/>
      <Footer/>
    </div>
  );
};

export default HomePage;

