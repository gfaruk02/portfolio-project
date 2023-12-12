import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div id="home" className="bg-blue-950">
            <div className=" sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
           
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
         
        </div>
    );
};

export default Home;