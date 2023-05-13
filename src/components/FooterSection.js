import React from 'react'; 
import cup_coffee from '../assets/cup_coffee.gif';

const FooterSection = () => {
    return (
        <div className="bg-primary h-[15vh] md:h-[30vh] w-[100%] items-center flex justify-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src={cup_coffee}
          alt=""
          className="h-[100px]  w-[100px] xl:h-[200px] xl:w-[200px] object-cover"
        />
        <p className="text-white text-xl">
          All content ©{" "}
          <span className="text-xl font-semibold underline">
            {" "}
            Sohag Hossain
          </span>
        </p>
      </div>
    </div>
    );
};

export default FooterSection;