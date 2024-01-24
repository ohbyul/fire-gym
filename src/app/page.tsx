import Spinner from "@/components/spinner/Spinner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "./main/about";
import Home from "./main/home";
import Skills from "./main/skill";
import Career from "./main/career";
import ComponentAOS from "./client";
import Introduce from "./main/introduce";



export default function Page() {

    return (
        <div>
            <ComponentAOS />
            <Spinner />
            <Navbar />
            <main>
                <Home />
                {/* <About /> */}
                {/* <Skills /> */}
                {/* <Career /> */}
                {/* <Project /> */}
                {/* <Contact /> */}
                {/* <Introduce /> */}
            </main>
            <Footer />
            <a href="#" className="toTop">
                <i className="bx bxs-up-arrow" />
            </a>
        </div>
    )
}
