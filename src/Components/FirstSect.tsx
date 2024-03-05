import { Parallax } from "react-parallax";
import space from "../assets/space.svg";
import "../sections.css";
const FirstSect = () => {
  return (
    <>
      <div className="firstsect w-full p-5">
        <div className="mx-auto w-full max-w-[1200px]">
          <Parallax bgImage={space} strength={500}>
            <div style={{ height: 500 }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1 className="text-black font-custom text-3xl sticky top-0 bg-teal p-5">
                  webdevrafa
                </h1>
                <p className="text-white bg-black p-5">
                  Welcome to my page. I am a professional web developer. If you
                  are in need of web services, please check out my page.
                </p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default FirstSect;
