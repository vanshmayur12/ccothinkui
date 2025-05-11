import "./index.css";
import { useNavigate } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

function App() {
  const navigate = useNavigate();
  const headingref = useRef(null);

  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display'] overflow-hidden">
        <div className="w-full relative z-[1] min-h-screen flex flex-col justify-between">
          <nav className="w-full p-4 md:p-8 flex flex-col md:flex-row justify-between items-center z-50 gap-4">
            <div className="brand text-xl font-medium transition-transform duration-300 hover:scale-110">
              <button ><img 
                className="w-35
                 h-16"
               src="./69.gif"
               />
               <h6></h6>
              </button>
            </div>
            <div className="links flex flex-wrap justify-center gap-6 md:gap-10">
              {["What we do", "Who we are", "How we give back", "Talk to us"].map(
                (link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-md hover:text-gray-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </nav>

          <div className="textcontainer w-full px-2 md:px-[20%] flex-grow">
            <div className="text w-full md:w-[50%]">
              <h3 className="brand text-3xl md:text-6xl font-medium transition-transform duration-300 hover:scale-110">
                AMPLIFY CREATIVITY <br></br> ACCELERATE DISCOVERY.
              </h3>
              <p className="text-lg md:text-2xl w-full md:w-[80%] mt-6 md:mt-10 font-normal">
  
</p>

            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-end pb-10">
            <img
              ref={headingref}
              src="./56.gif"
              alt=""
              className="w-[60vw] md:w-[40rem] transition-transform duration-300 
              scale-95
              hover:scale-105 mx-auto px-5"
            />

            <button onClick={() => navigate("/home")}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-pop"
            >
              GET START
            </button>
          </div>
        </div>
      </div>

      <div className="w-full relative min-h-screen px-3 md:px-10">
        <h1 className="text-4xl md:text-8xl  
        scale-90">
        CO.THINK
        </h1>

        <p className="text-lg md:text-4xl leading-relaxed md:leading-[1.8] w-full md:w-[80%] mt-6 md:mt-10 font-light mx-5">
         Smarter Research, Unified Intelligence<br></br>
Our AI agent bridges disciplines, turning scattered knowledge into clear insights—so researchers spend less time searching and more time discovering.


        </p>

        <div className="flex flex-wrap gap-6 justify-center items-center mt-10 px-4 py-20">
          <img
            className="w-full sm:w-[48%] lg:w-[30%] rounded-xl hover:rounded-2xl transition-transform duration-300 opacity-50 hover:opacity-100 scale-90 hover:scale-100"
            src="./055.gif"
            alt=""
          />
          <img
            className="w-full sm:w-[48%] lg:w-[30%] rounded-xl hover:rounded-2xl transition-transform duration-300 opacity-50 hover:opacity-100 scale-90 hover:scale-100"
            src="./029.gif"
            alt=""
          />
          <img
            className="w-full sm:w-[48%] lg:w-[30%] rounded-xl hover:rounded-2xl transition-transform duration-300 opacity-50 hover:opacity-100 scale-90 hover:scale-100"
            src="./85.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
