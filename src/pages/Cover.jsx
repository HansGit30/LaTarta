import "./Cover.css"
import Logo from "../assets/WEB LATARTA-04.png"
import Galletas from "../assets/galletas.jpeg"
import MiniTorta from "../assets/miniTorta.jpeg"
import TortaAlfajor from "../assets/tortaAlfajor.jpeg"

const Cover = () => {
  return (
    <section className="cover relative w-full h-screen overflow-hidden font-montserrat">

      <header className="w-full mb-5 flex justify-center">
        <img className="w-[120px] mb-5 pl-4" src={Logo} alt="" />
      </header>

      <aside className="relative w-full h-[50%] flex justify-center items-start">
        <div className="absolute left-0 bottom-0 -rotate-12 w-[180px] h-[250px] rounded-2xl z-[1]">
          <img className="w-full h-full object-cover rounded-2xl" src={Galletas} alt="" />
        </div>
        <div className="w-[180px] h-[250px]  rounded-t-2xl z-[2]">
          <img className="w-full h-full object-cover rounded-2xl" src={MiniTorta} alt="" />
        </div>
        <div className="absolute -right-5 bottom-7 rotate-12 w-[180px] h-[250px] rounded-2xl z-[3]">
          <img className="w-full h-full object-cover rounded-2xl" src={TortaAlfajor} alt="" />
        </div>
{/* 
        <div className="btnStart absolute z-[4] top-[55%] w-[250px] h-[70px] rounded-2xl text-white flex items-center justify-center text-xl">Elige tu favorito</div> */}
      </aside>

      <div className="w-full text-center mt-10">
        <h1 className="text-xl mb-5">Postres perfectos para celebrar el amor y la amistad</h1>
        <button className="btnStart px-10 py-5 rounded-2xl text-white">Elige tu favorito</button>
      </div>




      {/* <header className="relative w-full h-[50%] pl-4 pt-5">
        <img className="w-[120px] mb-8" src={Logo} alt="" />
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
      </aside> */}
    </section>
  )
}

export default Cover