import "./Cover.css"
import Logo from "../assets/WEB LATARTA-04.png"
import Galletas from "../assets/galletas-D259xRvj.webp"
import MiniTorta from "../assets/miniTorta-C2LAIxiu.webp"
import TortaAlfajor from "../assets/tortaAlfajor-DeMz6Yzo.webp"
import { Link } from "react-router-dom"

const Cover = () => {
  return (
    <section className="cover relative w-full h-screen overflow-hidden font-montserrat">
      <header className="w-full h-[20%] flex items-end justify-center">
        <img className="h-[80px] w-auto" src={Logo} alt="" />
      </header>
      <aside className="relative w-full max-w-[450px] mx-auto h-[55%] flex justify-center items-center  max-h-[555px] my-auto ">
        <img className="w-[180px] h-[250px] rounded-2xl -rotate-12 absolute left-0 bottom-7 z-[1]" src={Galletas} alt="" />
        <img className="w-[180px] h-[250px] rounded-2xl z-[2]" src={MiniTorta} alt="" />
        <img className="w-[180px] h-[250px] rounded-2xl  rotate-12 absolute  right-0 bottom-7 z-[3]" src={TortaAlfajor} alt="" />
      </aside>
      <div className="w-full h-[25%] text-center  flex flex-col justify-center gap-5 ">
        <h1 className="text-lg px-4">Postres perfectos para celebrar el amor y la amistad</h1>
        <Link to="/LaTarta/inicio">
          <button className="btnStart px-10 py-5 rounded-2xl text-white">Elige tu favorito
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Cover