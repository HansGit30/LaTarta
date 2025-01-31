
import Insta1 from "../assets/insta/INSTA LATARTA-26.webp"
import Insta2 from "../assets/insta/INSTA LATARTA-27.webp"
import Insta3 from "../assets/insta/INSTA LATARTA-30.webp"
import Insta4 from "../assets/insta/INSTA LATARTA-31.webp"
import Insta5 from "../assets/insta/INSTA LATARTA-34.webp"
import useScrollAnimation from "../hooks/useScrollAnimation";
import insta from "../assets/iconos/INSTAGRAM LOGO.svg"


const Instagram = () => {

  useScrollAnimation([
    {
      className: "scrollDerecha",
      style: {
        opacity: "1",
        transform: "translateX(0) rotate(-15deg)",
        transition: "transform 0.5s ease, opacity 0.5s ease",
      },
    },
    {
      className: "scrollIzquierda",
      style: {
        opacity: "1",
        transform: "translateX(0) rotate(15deg)",
        transition: "transform 0.5s ease, opacity 0.5s ease",
      },
    },
    {
      className: "scrollArriba",
      style: {
        opacity: "1",
        transform: "translateY(0) rotate(15deg)",
        transition: "transform 0.5s ease, opacity 0.5s ease",
      },
    },
  ]);
  
  return (
    <section className="mb-20 px-4 md:px-0 ">
      <div className="w-full grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
        <div className="text-center h-[200px] md:h-[300px] lg:text-start">
          <h2 className="text-2xl font-julius font-bold mb-6 lg:px-10 lg:text-3xl">Instagram</h2>
          <h3 className="mb-2 lg:px-10 lg:text-sm font-poppin">Tus antojos tienen un nuevo hogar</h3>
          <p className="px-4 lg:px-10 lg:max-w-[500px] font-quicksand">Únete a nuestra comunidad dulce y no te pierdas ninguna sorpresa. Sé el primero en conocer nuestras novedades, síguenos en Instagram.</p>
        </div>
        <div className="w-full h-[200px]  relative">
          <img className="h-[150px] w-[30vw] object-cover absolute bottom-0 left-[15%] rotate-12 z-[3] md:h-[250px] md:w-[25vw] lg:w-[230px] opacity-0 scrollDerecha" src={Insta1} alt="" />
        </div>
        <div className="w-full h-[200px]  relative">
          <img className="h-[150px] w-[30vw] object-cover absolute bottom-0 left-[50px] -rotate-12 z-10 md:h-[250px] md:w-[25vw] lg:w-[230px] lg:left-[50px] opacity-0 scrollDerecha" src={Insta2} alt="" />
          <img className="h-[150px] w-[30vw] object-cover absolute -top-28 right-[50px] md:h-[250px] md:w-[25vw] lg:w-[230px] lg:right-[50px] opacity-0 scrollIzquierda" src={Insta3} alt="" />
        </div>
        <div className="w-full h-[200px] relative">
          <img className="h-[150px] w-[30vw] object-cover absolute bottom-0 left-[50px] -rotate-12 md:h-[250px] md:w-[25vw] lg:w-[230px] lg:-bottom-10 opacity-0 scrollDerecha" src={Insta4} alt="" />
          <img className="h-[150px] w-[30vw] object-cover absolute -top-10 right-[50px] rotate-12 md:h-[250px] md:w-[25vw] lg:w-[230px] lg:right-[50px] opacity-0 scrollIzquierda" src={Insta5} alt="" />
        </div>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <a className="btnElige flex items-center justify-center gap-3 rounded-xl  w-[200px] h-[70px] text-white" href="https://www.instagram.com/latarta.sac/">
          <img className="w-[30px]" src={insta} alt="logoinsta" />
          latarta.sac
        </a>
      </div>
    </section>
  )
}

export default Instagram