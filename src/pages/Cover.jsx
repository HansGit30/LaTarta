import "./Cover.css"
import Logo from "../assets/WEB LATARTA-04.png"
import Galletas from "../assets/galletas-D259xRvj.webp"
import MiniTorta from "../assets/miniTorta-C2LAIxiu.webp"
import TortaAlfajor from "../assets/tortaAlfajor-DeMz6Yzo.webp"
import { Link } from "react-router-dom"
import useScrollAnimation from "../hooks/useScrollAnimation"

const Cover = () => {
  useScrollAnimation([
    {
      className: "scrollDerecha",
      style: {
        opacity: "1",
        transform: "translateX(0) rotate(-15deg)",
        transition: "transform 1s ease, opacity 0.5s ease",
      },
    },
    {
      className: "scrollIzquierda",
      style: {
        opacity: "1",
        transform: "translateX(0) rotate(15deg)",
        transition: "transform 1s ease, opacity 0.5s ease",
      },
    },
    {
      className: "scrollArriba",
      style: {
        opacity: "1",
        transform: "translateY(0)",
        transition: "transform 1s ease, opacity 0.5s ease",
      },
    },

  ]);
  return (
    <section className="cover relative w-full h-screen overflow-hidden font-montserrat">
      <header className="w-full h-[15%] flex items-end justify-center">
        <img className="h-[80px] w-auto" src={Logo} alt="" />
      </header>

      <aside className="relative w-full max-w-[450px] mx-auto h-[55%] flex justify-center items-center  max-h-[555px] my-auto">
        <img className="w-[180px] h-[250px] rounded-2xl -rotate-12 absolute left-0 bottom-7 z-[1] opacity-0 scrollDerecha" src={Galletas} alt="foto1" />
        <img className="w-[180px] h-[250px] rounded-2xl z-[2] -translate-y-10 opacity-0 scrollArriba" src={MiniTorta} alt="foto2" />
        <img className="w-[180px] h-[250px] rounded-2xl  rotate-12 absolute  right-0 bottom-7 z-[3] opacity-0 scrollIzquierda" src={TortaAlfajor} alt="foto3" />
      </aside>

      <div className="w-full h-[25%] text-center  flex flex-col justify-center gap-5 ">
        <h1 className="text-md px-5">Postres perfectos para celebrar el amor y la amistad</h1>
        <Link to="/LaTarta/inicio">
          <button className="btnStart px-10 py-5 rounded-2xl text-white">Elige tu favorito
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Cover