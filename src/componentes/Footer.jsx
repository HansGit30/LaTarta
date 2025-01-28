import Logo from "../assets/WEB LATARTA-04.png"
import Galleta from "../assets/galleta-emprendedor.png"
import Face from "../assets/FACEBOOK LOGO.svg"
import Insta from "../assets/INSTAGRAM LOGO.svg"
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
    <section className=" relative footer w-full h-[250px]">
      <img className="absolute w-[130px] -top-28 right-0 opacity-0 scrollIzquierda" src={Galleta} alt="" />
      <div className="w-full h-[160px] flex items-end justify-between px-10">
        <div>
          <img className="w-[120px]" src={Logo} alt="" />
        </div>
        <div className="flex pb-[15px] gap-3">
          <a className=" block w-[40px] h-[40px] bg-black" href="https://www.facebook.com/profile.php?id=61561164323425&mibextid=ZbWKwL">
            <img className="w-full h-full" src={Face} alt="" />
          </a>
          <a className=" block w-[40px] h-[40px] bg-black" href="https://www.instagram.com/latarta.sac/">
            <img className="w-full h-full" src={Insta} alt="" />
          </a>
        </div>
      </div>
      <div className="w-full h-[90px] flex justify-center items-end pb-[10px]">
        <p className="">Latartasac</p>
      </div>
    </section>
  )
}

export default Footer