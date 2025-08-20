import { memo } from "react";
import Logo from "../../shared/assets/LOGOTYPE – BILETICK.svg"
import { Link } from "react-router-dom";
import Market from "../../shared/assets/image 7.png"
import Apple from "../../shared/assets/image 8.png"
import image from "../../shared/assets/footer-icon/Vector.svg"
import shining from "../../shared/assets/footer-icon/shining-line.svg"
import question from "../../shared/assets/footer-icon/question-line.svg"
import phone from "../../shared/assets/footer-icon/phone-line.png"
import vector from "../../shared/assets/footer-icon/Vector (1).png"
import cla from "../../shared/assets/footer-icon/clapperboard-line.png"
import vector_2 from "../../shared/assets/footer-icon/Vector (2).png"
import boll from "../../shared/assets/footer-icon/basketball-line.png"
import instagram from "../../shared/assets/footer-icon/instagram-line.png"
import fakeboke from "../../shared/assets/footer-icon/facebook-circle-line (1).png"
import youtub from "../../shared/assets/footer-icon/youtube-line.png"

const Footer = () => {
  return (
  <footer className="dark:bg-[#111111] dark:text-white bg-black/4">
      <div className="continer mt-[40px] py-[20px] flex justify-between px-[10px] max-[850px]:grid max-[850px]:grid-cols-2 max-[850px]:gap-10 max-[850px]:pl-[50px]">
      <div className="flex flex-col gap-5">
        <Link to={"/"}> 
        <img src={Logo} alt="" />
        </Link>
        <Link to={"#"}>
        <img src={Apple} alt="" />
        </Link>
        <Link to={"#"}>
        <img src={Market} alt="" />
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <span>О нас</span>
        <Link to={"/"}>
        <div className="flex gap-2">
          <img src={image} alt="" />
          <p className="hover:text-red-600 hover:underline">Публичная оферта</p>
        </div>
        </Link>
       <Link to={"/"}>
        <div className="flex gap-2">
          <img src={shining} alt="" />
          <p className="hover:text-red-600 hover:underline">Реклама</p>
        </div>
       </Link>

        <Link to={"/"}>
        <div className="flex gap-2">
          <img src={question} alt="" />
          <p className="hover:text-red-600 hover:underline">F.A.Q</p>
        </div>
        </Link>
        <Link to={"/"}>
        <div className="flex gap-2">
          <img src={phone} alt="" />
          <p className="hover:text-red-600 hover:underline">Контакты</p>
        </div>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
         <span>Категории</span>
         <Link to={"/"}>
        <div className="flex gap-2">
          <img src={vector} alt="" />
          <p className="hover:text-red-600 hover:underline">Кино</p>
        </div>
         </Link>
         <Link to={"/"}>
         <div className="flex gap-2">
         <img src={cla} alt="" />
         <p className="hover:text-red-600 hover:underline">Театр</p>
         </div>
         </Link>
         <Link to={"/"}>
         <div className="flex gap-2">
         <img src={vector_2} alt="" />
         <p className="hover:text-red-600 hover:underline">Концерты</p>
         </div>
         </Link>
         <Link to={"/"}>
         <div className="flex gap-2">

         <img src={boll} alt="" />
         <p className="hover:text-red-600 hover:underline">Спорт</p>
         </div>
         </Link>
      </div>

      <div className="flex flex-col gap-5">
        <span>Связаться с нами</span>
        <div>
        <a href="tel:+998 (95) 897-33-38" className="hover:text-red-600 hover:underline">+998 (95) 897-33-38</a>
        </div>
        <div className="flex gap-4 flex-col">
          <span className="hover:text-red-600 hover:underline">Социальные сети</span>
          <div className="flex gap-3">
            <img src={instagram} alt="" />
            <img src={fakeboke} alt="" />
            <img src={youtub} alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default memo(Footer);
