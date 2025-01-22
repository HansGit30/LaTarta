import "./Cover.css"
import Logo from "../assets/WEB LATARTA-04.png"
import Galletas from "../assets/galletas.jpeg"
import MiniTorta from "../assets/miniTorta.jpeg"
import TortaAlfajor from "../assets/tortaAlfajor.jpeg"

const Cover = () => {
  return (
    <section className="cover relative w-full h-screen overflow-hidden font-montserrat">
      <header className="relative w-full h-[50%] pl-4 pt-5">
        <img className="w-[120px] mb-4" src={Logo} alt="" />
        <h1 className="max-w-[320px] text-5xl font-outfit leading-tight">Dulzura para compartir este San Valentín</h1>
      </header>

      <aside className="relative w-full h-[50%] flex justify-center items-end">
        <div className="absolute left-0 -bottom-32 -rotate-12 w-[200px] h-[300px] rounded-t-2xl z-[1]">
          <img className="w-full h-full object-cover rounded-t-2xl" src={Galletas} alt="" />
        </div>
        <div className="w-[200px] h-[300px]  rounded-t-2xl z-[2]">
          <img className="w-full h-full object-cover rounded-t-2xl" src={MiniTorta} alt="" />
        </div>
        <div className="absolute -right-5 -bottom-20 rotate-12 w-[200px] h-[300px] rounded-t-2xl z-[3]">
          <img className="w-full h-full object-cover rounded-t-2xl" src={TortaAlfajor} alt="" />
        </div>

        <div className="btnStart absolute z-[4] top-[55%] w-[250px] h-[70px] rounded-2xl text-white flex items-center justify-center text-xl">Elige tu favorito</div>
      </aside>
    </section>
  )
}

export default Cover