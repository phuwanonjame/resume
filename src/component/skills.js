import React, { useState } from "react";
import { Element } from "react-scroll";
function Skills() {
  const [openpage, setOpebpage] = useState(false);
  console.log(openpage);
  return (
    <Element name="skills" className=" bg-black h-screen  max-md:h-[1200px] ">
      <div className="h-full flex flex-col justify-center items-center ">
        <div>
          <div className=" flex justify-center">
            <h1 className="text-white text-7xl max-md:text-5xl">
              <span className="text-red-500">My </span>Skills
            </h1>
          </div>
        </div>
        <div className=" w-full max-md:flex-col max-md:p-5 flex justify-evenly items-center mt-10">
          <div className=" rounded-md shadow-md shadow-red-600 text-white">
            <div>
              <label className="flex justify-center items-center p-2 mt-5">
                <div
                  className={`flex justify-center   text-2xl ${openpage ? "text-white" : "text-red-500"} items-center gap-2 cursor-pointer`}
                  onClick={() => setOpebpage(false)}
                >
                  <i class="fa-solid fa-code"></i>
                  <p className="mr-5">Tech Stack</p>
                </div>
                <div
                  className={`flex justify-center   text-2xl ${openpage ? "text-red-500" : "text-white"} items-center gap-2 cursor-pointer`}
                  onClick={() => setOpebpage(true)}
                >
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                  <p>Tools</p>
                </div>
              </label>
            </div>
            {openpage === false && (
              <div className="grid grid-cols-5 gap-10 p-10 max-md:text-xs ">
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20   rounded-full"
                      src="https://www.shareicon.net/download/2016/08/01/639868_development.ico"
                      alt=""
                    ></img>
                  </div>
                  <p>HTML</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20    rounded-full"
                      src="https://logospng.org/download/css-3/logo-css-3-2048.png"
                      alt=""
                    ></img>
                  </div>
                  <p>CSS</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20  rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                      alt=""
                    ></img>
                  </div>
                  <p>JavaScript</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20  rounded-full"
                      src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
                      alt=""
                    ></img>
                  </div>
                  <p>React.js</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20  rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp"
                      alt=""
                    ></img>
                  </div>
                  <p>Node.js</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20 rounded-full"
                      src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default"
                      alt=""
                    ></img>
                  </div>
                  <p>Tailwind css</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20   rounded-full"
                      src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
                      alt=""
                    ></img>
                  </div>
                  <p>React Native</p>
                </div>
                <div className="text-center">
                  <div className=" flex justify-center items-center">
                    <img
                      className="w-20   rounded-full"
                      src="https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png"
                      alt=""
                    ></img>
                  </div>
                  <p>Python</p>
                </div>
              </div>
            )}
            {openpage === true && (
              <div className="grid grid-cols-5 gap-10 p-10 max-md:text-xs ">
              <div className="text-center">
                <div className=" flex justify-center items-center">
                  <img
                    className="w-20   rounded-full"
                    src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBRXp912Lw.0Yxg2DfVOh1gnKXRQeKb8m8DA2Jkx6Xwk0yYA23Ude.JrHx3QjJv9hvUNKZhFYJFJP2QtF6zREDZk-&format=source"
                    alt=""
                  ></img>
                </div>
                <p>visual code</p>
              </div>
              <div className="text-center">
                <div className=" flex justify-center items-center">
                  <img
                    className="w-20  bg-white   rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                    alt=""
                  ></img>
                </div>
                <p>Github</p>
              </div>
              <div className="text-center">
                <div className=" flex justify-center items-center">
                  <img
                    className="w-20  rounded-full"
                    src="https://static-00.iconduck.com/assets.00/figma-icon-2048x2048-lvgft610.png"
                    alt=""
                  ></img>
                </div>
                <p>Figma</p>
              </div>
              <div className="text-center">
                <div className=" flex justify-center items-center">
                  <img
                    className="w-20  rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/dc/XAMPP_Logo.png"
                    alt=""
                  ></img>
                </div>
                <p>Xampp</p>
              </div>
              <div className="text-center">
                <div className=" flex justify-center items-center">
                  <img
                    className="w-20  rounded-full"
                    src="https://intellij-support.jetbrains.com/hc/user_images/5l0fLOoDkFwpjU_ZKu7Ofg.png"
                    alt=""
                  ></img>
                </div>
                <p>PyCharm</p>
              </div>
              <div className="text-center">
                <div className=" flex justify-center items-center">
                  <img
                    className="w-20 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968306.png"
                    alt=""
                  ></img>
                </div>
                <p>Mssql</p>
              </div>
              
            </div>
              )}
          </div>

          <div className=" text-white text-2xl max-md:mt-5 ">
            <div className="flex flex-col justify-end max-md:flex-row max-md:justify-center">
              <h1 className="">
                Tech Stack <i class="text-red-500 fa-solid fa-gear"></i> &
              </h1>
              <h1 className="mt-2 max-md:mt-0 flex ">
                Tools<i class=" text-red-500 ml-2 fa-solid fa-hammer"></i>{" "}
              </h1>
            </div>
            <div className=" text-sm  ">
              <p className="max-md:hidden"> There are some tech stack and tools </p>
              <p className="max-md:hidden"> that I've learned and experienced</p>
              <p className=" hidden max-md:block text-white">There are some tech stack and tools that I've learned and experienced</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
