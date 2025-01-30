import { Link } from "react-router-dom"
import Logo from "../assets/iconos/WEB LATARTA-04.png"
import ImgTempo from "../assets/bene.jpeg"
import Instagram from "../componentes/Instagram"
import Beneficios from "../componentes/Beneficios"
import "./Home.css"
import Footer from "../componentes/Footer"
import Wa from "../assets/iconos/whatsapp-brands-solid.svg"
import Galeria from "../componentes/Galeria"

const Home = () => {

    const handleWhatsAppClick = () => {
        const telefono = '51993304138';
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                    *¡Hola! Deseo ver su catalogo 😊*%0A%0A
                    `;
        window.open(url);
    };
    return (
        <section className="home relative overflow-x-hidden">
            <div className="fixed z-40  bottom-[30px] right-[20px] w-[80px] h-[80px] rounded-full  btnWa bg-black">

                <img onClick={handleWhatsAppClick} className="pt-3 w-[60%] mx-auto " src={Wa} alt="" />

            </div>
            <header className="pt-2 px-4 mb-5">
                <Link to="/LaTarta">
                    <img className="w-[120px]" src={Logo} alt="" />
                </Link>
            </header>
            {/* <Ofertas prop={handleWhatsAppClick} /> */}
            <div className="w-full text-center mb-[50px] px-4 md:mb-[100px]">
                <p className="font-outfit text-lg mb-5 px-5 md:mb-10">"¡El amor y la amistad no esperan! Haz tu pedido antes del 12 de febrero y sorprende a tus seres queridos."</p>
                <div className="relative w-full max-w-[600px] mx-auto h-[200px]">
                    <img className="w-full h-full rounded-2xl object-cover" src={ImgTempo} alt="" />
                    <button onClick={handleWhatsAppClick} className="absolute top-[35%] right-[25%] btnStart px-10 py-5 rounded-2xl text-white font-quicksand">Ver catalogo</button>
                </div>
            </div>
            <Galeria prop={handleWhatsAppClick} />
            <Beneficios />
            <Instagram />
            <Footer />
        </section>
    )
}

export default Home