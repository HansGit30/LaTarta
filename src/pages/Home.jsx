import { Link } from "react-router-dom"
import Logo from "../assets/WEB LATARTA-04.png"
import ImgTempo from "../assets/tempo1.jpg"
import Instagram from "../componentes/Instagram"
import Beneficios from "../componentes/Beneficios"
import Ofertas from "../componentes/Ofertas"
import PostresHome from "../componentes/PostresHome"
import "./Home.css"
import Footer from "../componentes/Footer"

const Home = () => {
    return (
        <section className="home overflow-x-hidden">
            <header className="pt-2 px-4 mb-5">
                <Link to="/LaTarta">
                    <img className="w-[120px]" src={Logo} alt="" />
                </Link>
            </header>
            <Ofertas />
            {/* <PostresHome /> */}
            <div className="w-full text-center mb-[50px] px-4 md:mb-[100px]">
                <p className="font-outfit text-xl mb-5 md:mb-10">"¡El amor y la amistad no esperan! Haz tu pedido antes del 13 de febrero y sorprende a tus seres queridos."</p>
                <img className="w-full  max-w-[600px] mx-auto h-[200px] rounded-2xl object-cover" src={ImgTempo} alt="" />
            </div>
            <Beneficios />
            <Instagram />
            <Footer />
        </section>
    )
}

export default Home