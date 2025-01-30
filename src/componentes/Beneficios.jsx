import receta from "../assets/beneficios/receta.jpg"
import detalles from "../assets/beneficios/detalles.webp"
import ingre from "../assets/beneficios/ingredientes.jpg"

const Beneficios = () => {
    return (
        <section className="w-full px-4 mb-20 md:mb-[200px]">
            <h2 className="font-cormorant text-xl mb-2 font-bold lg:text-3xl lg:px-10">Nos tomamos en serio nuestros <br className="hidden lg:block" /> postres artesanales</h2>
            <p className="font-quicksand text-sm mb-10 lg:text-sm lg:px-10">Ingredientes frescos, recetas únicas y un toque especial.</p>
            <div className="lg:flex items-center justify-between lg:px-10">
                <article className="w-full">
                    <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4">
                        <img className="w-full h-full object-cover rounded-lg" src={detalles} alt="detalles" />
                    </div>
                    <div className="mb-10">
                        <h3 className="font-bold text-xl max-w-[250px] mb-2 font-cormorant lg:text-lg">Detalles Únicos en la Presentación</h3>
                        <p className="max-w-[260px] font-quicksand text-sm">Nuestros postres suelen estar decorados con un toque especial y estético, ideal para regalar o para ocasiones especiales.</p>
                    </div>
                </article>

                <article className="w-full flex flex-col items-end md:items-center">
                    <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4">
                        <img className="w-full h-full object-cover rounded-lg" src={ingre} alt="detalles" />
                    </div>
                    <div className="mb-10">
                        <h3 className="font-cormorant text-end font-bold text-xl mb-2 lg:text-lg">Calidad de los Ingredientes</h3>
                        <p className="text-end max-w-[270px] font-quicksand text-sm">Preparamos con ingredientes frescos y de alta calidad, sin conservantes ni aditivos artificiales. Esto asegura un mejor sabor y mayor valor nutritivo.</p>
                    </div>
                </article>

                <article className="w-full flex flex-col md:items-end">
                    <div className="w-[200px] h-[250px] rounded-lg mb-4">
                        <img className="w-full h-full object-cover rounded-lg" src={receta} alt="receta" />
                    </div>
                    <div className="mb-5 md:text-end">
                        <h3 className="font-bold text-xl mb-2 font-cormorant lg:text-lg">Sabor Único y Auténtico</h3>
                        <p className="max-w-[260px] font-quicksand text-sm">Cada receta es cuidadosamente elaborada, lo que da como resultado postres con un sabor más auténtico y personalizado.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Beneficios