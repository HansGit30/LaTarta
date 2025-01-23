import { Link } from "react-router-dom"
import Logo from "../assets/WEB LATARTA-04.png"

const Home = () => {
  return (
    <section>
        <header className="px-4">
            <Link to="/La_Tarta">
                <img className="w-[120px]" src={Logo} alt="" />
            </Link>
        </header>
        <aside className="w-full mb-5 px-4">
            <h2 className="font-montserrat mb-5">Descubre nuestras ofertas!!!</h2>
            <div className="m-auto rounded-2xl w-full h-[200px] bg-slate-500"></div>
        </aside>
        <section className="px-4">
            <div className="w-full flex justify-between">
                <h2>Postres - San Valentín</h2>
                <p>ver más</p>
            </div>
            <article className="w-full grid grid-cols-2 gap-4 pt-5 mb-[50px]">
                <div className="h-[250px]  bg-slate-500 rounded-2xl"></div>
                <div className="h-[250px]  bg-slate-500 rounded-2xl"></div>
            </article>
            <div className="w-full text-center mb-[50px]">
                <p className="font-outfit text-xl">"¡El amor y la amistad no esperan! Haz tu pedido antes del 13 de febrero y sorprende a tus seres queridos."</p>
            </div>
        </section>
        <section className="w-full">
                <h2>Nos tomamos en serio nuestros postres artesanales</h2>
                <p>Ingredientes frescos, recetas únicas y un toque especial.</p>
        </section>
    </section>
  )
}

export default Home