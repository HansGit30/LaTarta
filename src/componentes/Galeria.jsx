import foto1 from "../assets/galeria/ga9.webp"
import foto2 from "../assets/galeria/ga2.webp"
import foto3 from "../assets/galeria/ga3.webp"
import foto4 from "../assets/galeria/g4.webp"
import foto5 from "../assets/galeria/ga5.webp"
import foto6 from "../assets/galeria/ga8.webp"

const Galeria = () => {
    return (
        <section className="px-4 mb-10">
            <h2 className="mb-5 text-xl font-bold">Explora Nuestros Dulces Creaciones 🍮✨</h2>

            <div class="grid grid-cols-2 grid-rows-4 gap-0">
                <div class="h-[300px] flex justify-center items-center col-start-1 col-end-2 row-start-1 row-end-3">
                    <img className="w-[90%] h-[95%] object-cover rounded-xl" src={foto1} alt="" />
                </div>
                <div class="h-[150px] flex justify-center items-center col-start-2 col-end-3 row-start-1 row-end-2">
                    <img className="w-[90%] h-[90%] object-cover rounded-xl" src={foto2} alt="" />
                </div>
                <div class="h-[150px] flex justify-center items-center col-start-2 col-end-3 row-start-2 row-end-3">
                    <img className="w-[90%] h-[90%] object-cover rounded-xl" src={foto3} alt="" />
                </div>
                <div class="h-[150px] flex justify-center items-center col-start-1 col-end-2 row-start-3 row-end-4">
                    <img className="w-[90%] h-[90%] object-cover rounded-xl" src={foto4} alt="" />
                </div>
                <div class="h-[150px] flex justify-center items-center col-start-1 col-end-2 row-start-4 row-end-5">
                    <img className="w-[90%] h-[90%] object-cover rounded-xl" src={foto5} alt="" />
                </div>
                <div class="h-[300px] flex justify-center items-center col-start-2 col-end-3 row-start-3 row-end-5">
                    <img className="w-[90%] h-[95%] object-cover rounded-xl" src={foto6} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Galeria