import earth from "../assets/earth.svg";
import { Parallax } from "react-parallax";
const ThirdSect = () => {
  return (
    <>
      <div className="py-[150px] thirdsect w-full">
        <h1 className="text-white text-center font-custom text-4xl md:text-5xl">
          HELP YOU START YOUR BUSINESS
        </h1>
        <div className="mx-auto w-[90%] max-w-[300px]">
          <p className="text-white md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            iusto earum. Reiciendis, optio. Iste minus tempora mollitia odio
            possimus accusamus, culpa, totam sunt libero officia sed repudiandae
            ratione eos magnam!
          </p>
        </div>
        <Parallax className="mt-[50px]" bgImage={earth} strength={500}>
          <div style={{ height: 500 }}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default ThirdSect;
