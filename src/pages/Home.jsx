import { Link } from "react-router-dom"
import Logo from "../assets/WEB LATARTA-04.png"
import ImgTempo from "../assets/tempo1.jpg"

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
                <p className="font-outfit text-xl mb-5">"¡El amor y la amistad no esperan! Haz tu pedido antes del 13 de febrero y sorprende a tus seres queridos."</p>
                <img className="w-full h-[200px] rounded-2xl object-cover" src={ImgTempo} alt="" />
            </div>
        </section>
        <section className="w-full px-4">
                <h2 className="text-2xl mb-2 font-bold">Nos tomamos en serio nuestros postres artesanales</h2>
                <p className="mb-10">Ingredientes frescos, recetas únicas y un toque especial.</p>

                <article className="w-full">
                    <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4"></div>
                    <div className="mb-10">
                        <h3 className="font-bold text-xl max-w-[250px] mb-2">Detalles Únicos y Cuidado en la Presentación</h3>
                        <p className="max-w-[260px]">Nuestros postres suelen estar decorados con un toque especial y estético, ideal para regalar o para ocasiones especiales.</p>
                    </div>
                </article>

                <article className="w-full flex flex-col items-end">
                    <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4"></div>
                    <div className="mb-10">
                        <h3 className="text-end font-bold text-xl mb-2">Calidad de los Ingredientes</h3>
                        <p className="text-end max-w-[260px]">Preparamos con ingredientes frescos y de alta calidad, sin conservantes ni aditivos artificiales. Esto asegura un mejor sabor y mayor valor nutritivo.</p>
                    </div>
                </article>

                <article className="w-full">
                    <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4"></div>
                    <div className="mb-5">
                        <h3 className="font-bold text-xl mb-2">Sabor Único y Auténtico</h3>
                        <p className="max-w-[260px]">Cada receta es cuidadosamente elaborada, lo que da como resultado postres con un sabor más auténtico y personalizado.</p>
                    </div>
                </article>

        </section>
    </section>
  )
}

export default Home