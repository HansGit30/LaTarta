

const Beneficios = () => {
    return (
        <section className="w-full px-4 mb-20">
            <h2 className="text-2xl mb-2 font-bold">Nos tomamos en serio nuestros postres artesanales</h2>
            <p className="mb-10">Ingredientes frescos, recetas únicas y un toque especial.</p>

            <article className="w-full">
                <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4"></div>
                <div className="mb-10">
                    <h3 className="font-bold text-xl max-w-[28  0px] mb-2 font-montserrat">Detalles Únicos y Cuidado en la Presentación</h3>
                    <p className="max-w-[260px]">Nuestros postres suelen estar decorados con un toque especial y estético, ideal para regalar o para ocasiones especiales.</p>
                </div>
            </article>

            <article className="w-full flex flex-col items-end">
                <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4"></div>
                <div className="mb-10">
                    <h3 className="font-montserrat text-end font-bold text-xl mb-2">Calidad de los Ingredientes</h3>
                    <p className="text-end max-w-[270px]">Preparamos con ingredientes frescos y de alta calidad, sin conservantes ni aditivos artificiales. Esto asegura un mejor sabor y mayor valor nutritivo.</p>
                </div>
            </article>

            <article className="w-full">
                <div className="w-[200px] h-[250px] bg-slate-500 rounded-lg mb-4"></div>
                <div className="mb-5">
                    <h3 className="font-bold text-xl mb-2 font-montserrat">Sabor Único y Auténtico</h3>
                    <p className="max-w-[260px]">Cada receta es cuidadosamente elaborada, lo que da como resultado postres con un sabor más auténtico y personalizado.</p>
                </div>
            </article>
        </section>
    )
}

export default Beneficios