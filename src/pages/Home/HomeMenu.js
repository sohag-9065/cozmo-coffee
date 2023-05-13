/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { coffeeVariant } from "../../helper/content";
import styles from "../../helper/style";

const HomeMenu = ({ max }) => {
  let render = max ? 6 : 3;
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} w-[100%] bg-primary`}
    >
      <h3 className="text-3xl text-center text-white font-extrabold">
        Your Favorite
      </h3>
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {coffeeVariant.slice(0, render).map((variant) => (
          <div key={variant.id} className="h-[50vh] w-[400px] relative">
            <div className="absolute h-[100%] w-[100%] bg-black opacity-50"></div>
            <img
              src={variant.img}
              alt={variant.name}
              className="h-[100%] object-cover z-0 w-[100%]"
            />
            <div className="w-[100%] h-[100%] absolute top-0 left-0 flex flex-col justify-between p-4">
              <h4 className="text-center text-white font-bold text-2xl">
                {variant.name}
              </h4>
              <button className="text-white text-xl border border-white w-[150px] mx-auto bg-transparent hover:font-extrabold transition-all delay-100">
                {variant.btn_text}
              </button>
              <p className="text-justify text-white font-bold">
                {variant.description.substring(0, 70)} ...
              </p>
            </div>
          </div>
        ))}
      </div>

      
 
    </div>
  );
};

export default HomeMenu;
