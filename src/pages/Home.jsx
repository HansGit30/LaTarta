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
        <section className="home">
            <header className="px-4">
                <Link to="/La_Tarta">
                    <img className="w-[120px]" src={Logo} alt="" />
                </Link>
            </header>
            <Ofertas />
            <PostresHome />
            <div className="w-full text-center mb-[50px] px-4">
                <p className="font-outfit text-xl mb-5">"¡El amor y la amistad no esperan! Haz tu pedido antes del 13 de febrero y sorprende a tus seres queridos."</p>
                <img className="w-full h-[200px] rounded-2xl object-cover" src={ImgTempo} alt="" />
            </div>
            <Beneficios />
            <Instagram />
            <Footer />
        </section>
    )
}

export default Home