import { Link } from "react-router-dom"
import Logo from "../assets/WEB LATARTA-04.png"

const Home = () => {
  return (
    <section className="px-4">
        <header>
            <Link to="/La_Tarta">
                <img className="w-[120px]" src={Logo} alt="" />
            </Link>
        </header>
        <aside className="w-full mb-5">
            <h2 className="font-montserrat mb-5">Descubre nuestras ofertas!!!</h2>
            <div className="m-auto rounded-2xl w-full h-[200px] bg-slate-500"></div>
        </aside>
        <section>
            <div className="w-full flex justify-between">
                <h2>Postres - San Valentín</h2>
                <p>ver más</p>
            </div>
            <article className="w-full grid grid-cols-2 gap-4 pt-5 mb-5">
                <div className="h-[250px]  bg-slate-500 rounded-2xl"></div>
                <div className="h-[250px]  bg-slate-500 rounded-2xl"></div>
            </article>
            <div className="w-full h-[200px] bg-slate-700 rounded-2xl mb-5">
                temporizasor
            </div>
            <div className="w-full h-[200px] bg-slate-700 rounded-2xl mb-5">
                beneficios
            </div>
        </section>
    </section>
  )
}

export default Home