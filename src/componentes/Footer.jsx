import Logo from "../assets/iconos/WEB LATARTA-04.png"
import Galleta from "../assets/galleta-emprendedor.png"
import Face from "../assets/iconos/facebook-brands-solid.svg"
import Insta from "../assets/iconos/instagram-brands-solid.svg"
import useScrollAnimation from "../hooks/useScrollAnimation";

const Footer = () => {

  useScrollAnimation([
    {
      className: "scrollIzquierda",
      style: {
        opacity: "1",
        transform: "translateX(0) rotate(15deg)",
        transition: "transform 0.5s ease, opacity 0.5s ease",
      },
    },
  ]);
  return (
    <section className="relative z-50 footer w-full h-[250px]">
      <img className="absolute w-[130px] -top-28 right-0 opacity-0 scrollIzquierda" src={Galleta} alt="" />
      <div className="w-full h-[160px] flex items-end justify-between px-10">
        <div>
          <img className="w-[120px]" src={Logo} alt="" />
        </div>
        <div className="flex pb-[15px] gap-3">
          <a className=" block w-[40px] h-[40px] " href="https://www.facebook.com/profile.php?id=61561164323425&mibextid=ZbWKwL">
            <img className="w-full h-full" src={Face} alt="" />
          </a>
          <a className=" block w-[40px] h-[40px] " href="https://www.instagram.com/latarta.sac/">
            <img className="w-full h-full" src={Insta} alt="" />
          </a>
        </div>
      </div>
      <div className="w-full h-[90px] flex flex-col justify-center items-center pb-[10px]">
        <p className="text-sm">©2025 La Tarta – Dulzura artesanal para cada ocasión.</p>
        <p className="text-sm">Todos los derechos reservados.</p>
      </div>
    </section>
  )
}

export default Footer