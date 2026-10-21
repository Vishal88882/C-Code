import "../App.css";
import downarrow from "../assets/downarrow.svg"
import downarrownew from "../assets/downarrownew.svg"
import meta from "../assets/meta.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import intro from "../assets/intro.webp"

import { useState, useEffect, useRef } from "react";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      {width <= 480 ? (

        <main className="bg-[#0C1014] h-fit">
          <header className="p-3 border-b-2 border-b-[#303031] flex justify-between flex-row fixed top-0 left-0 right-0 z-50 bg-[#0C1014]">

            <div>
              <p className="font-['Kaushan_Script'] font-200 text-[26px] font-light text-white pl-1 ">Instagram</p>
            </div>

            <div className="pr-1">
              <a href="" className="text-[#758EE0] font-bold text-[14px] pr-2 hover:underline">Log in</a>
              <button className="text-white font-semibold text-[16px] bg-[#4A5DF9] rounded-[8px] p-2 pr">Open app</button>
            </div>

          </header>

          <div className="pt-20">
            <p className="text-[14px] text-[#6F7172] justify-center font-['Lexend'] flex flex-row ">English (UK) <img src={downarrow} /></p>
          </div>

          <section className="flex flex-col pt-32 items-center">
            <h1 className="text-white font-['Kaushan_Script'] text-[45px]">Instagram</h1>
            <p className="text-white text-[25px] px-4 pt-5 text-center">Share <span className="bg-gradient-to-r from-orange-700 via-red-600 to-purple-700 bg-clip-text text-transparent font-normal">everyday moments</span> with your close friends.</p>

            <section className="w-auto flex flex-col items-center pt-5 pb-12">
              <button className="bg-[#4A5DF9] rounded-[8px] p-3 w-80 text-white font-normal"> Open Instagram</button>

              <p className="text-[#6F7172] pt-4"><a href="" className="text-[#758EE0] font-bold text-[14px] hover:underline">Log in</a> or <a href="" className="text-[#758EE0] font-bold text-[14px] hover:underline">Sign up</a></p>

              <p className="text-[#6F7172] font-normal pt-64 flex flex-col justify-center align-center text-[12px]">from </p>
              <span className="flex flex-row gap-1 text-white text-[16px]"><img src={meta} />Meta</span>
            </section>
          </section>
        </main>

      ) : width <= 1024 ? (

        <main className="bg-[#0C1014] h-fit">
          <header className="bg-[#0C1014] p-12 border-b-2 border-b-[#494D53]"></header>

          <section className="bg-[#1F1F22] flex h-screen pt-64 items-center flex-col">
            <div className="p-2"><img src={instagram} /></div>
            <h1 className="pt-16 text-white text-[30px] px-2 text-center">Get the full experience with the tablet app</h1>

            <button className="bg-[#4A5DF9] rounded-[15px] p-5 text-center mt-12 w-[75%] text-white text-[25px] font-semibold"> Open Instagram</button>
            <p className="text-[#A8A89B] pt-8 pb-64 text-[25px]" ><a href="" className="text-[#758EE0] font-bold text-[25px] hover:underline">Log in</a> or <a href="" className="text-[#758EE0] font-bold text-[25px] hover:underline">Sign up</a></p>
          </section>
          <footer className="bg-[#0C1014] relative bottom-0 left-0 right-0 pb-16 flex-col flex border-t-2 border-t-[#494D53]">
            <p className="justify-center flex text-center flex-wrap gap-6 p-8 ">

              <a href="" className="tags">Meta</a>
              <a href="" className="tags">About</a>
              <a href="" className="tags">Blog</a>
              <a href="" className="tags">Jobs</a>
              <a href="" className="tags">Help</a>
              <a href="" className="tags">API</a>
              <a href="" className="tags">Privacy</a>
              <a href="" className="tags">Terms</a>
              <a href="" className="tags">Locations</a>
              <a href="" className="tags">Popular</a>
              <a href="" className="tags">Instagram Lite</a>
              <a href="" className="tags">Meta AI</a>
              <a href="" className="tags">Threads</a>
              <a href="" className="tags">Contact Uploading & Non-Users</a>
              <a href="" className="tags">Meta Verified</a>

              <a href="" className="flex flex-row text-[22px] text-[#A8A8A8]">English (UK)<img src={downarrownew} /></a>
              <a href="" className="text-[22px] text-[#A8A8A8]">&copy; 2026 Instagram from Meta</a>

            </p>

          </footer>

        </main>
      ) : width <= 1270 ? (


        <main className="flex flex-col">

          <section className="flex flex-row">

            <section className="bg-[#0C1014] w-[45%] flex flex-col justify-center">
              <h1 className="text-white text-center px-16 text-[28px] ">See everyday moments from your <span className="bg-gradient-to-r from-orange-700 via-red-600 to-purple-700 bg-clip-text text-transparent font-normal">close friends.</span></h1>
              <p>{typeof width}</p>
              <div className="pt-24"><img src={intro} alt="Img Is Loading" /></div>

            </section>

            <section className="bg-[#1F1F22] flex h-screen pt-64 items-center justify-center flex-col w-[55%]">
              <div className="p-2"><img src={instagram} className="w-20 h-20" /></div>
              <h1 className="pt-4 text-white text-[28px] px-14 text-center">Get the full experience with the tablet app</h1>

              <button className="bg-[#4A5DF9] rounded-[10px] p-4 text-center mt-12 w-[85%] text-white  text-[16px] font-semibold"> Open Instagram</button>
              <p className="text-[#A8A89B] pt-8 pb-72 text-[14px]" ><a href="" className="text-[#758EE0] font-bold text-[14px] hover:underline">Log in</a> or <a href="" className="text-[#758EE0] font-bold text-[14px] hover:underline">Sign up</a></p>
            </section>
          </section>

          <footer className="bg-[#0C1014] relative bottom-0 left-0 right-0 pb-12 flex-col flex border-t-2 border-t-[#262B30]">
            <p className="justify-center flex text-center flex-wrap gap-4 p-4 ">

              <a href="" className="tagsnew">Meta</a>
              <a href="" className="tagsnew">About</a>
              <a href="" className="tagsnew">Blog</a>
              <a href="" className="tagsnew">Jobs</a>
              <a href="" className="tagsnew">Help</a>
              <a href="" className="tagsnew">API</a>
              <a href="" className="tagsnew">Privacy</a>
              <a href="" className="tagsnew">Terms</a>
              <a href="" className="tagsnew">Locations</a>
              <a href="" className="tagsnew">Popular</a>
              <a href="" className="tagsnew">Instagram Lite</a>
              <a href="" className="tagsnew">Meta AI</a>
              <a href="" className="tagsnew">Threads</a>
              <a href="" className="tagsnew">Contact Uploading & Non-Users</a>
              <a href="" className="tagsnew">Meta Verified</a>

              <a href="" className="flex flex-row text-[12px] text-[#A8A8A8]">English (UK) <img src={downarrownew} className="w-4 h-4" /></a>
              <a href="" className="text-[12px] text-[#A8A8A8]">&copy; 2026 Instagram from Meta</a>

            </p>

          </footer>


        </main>
      ) : (
        <main className="flex flex-col">
          {/* <h1>Naruto Dark</h1> */}

          <section className="flex flex-row ">

            <section className="bg-[#0C1014] w-[58%] flex flex-col items-center pb-20">
              <div className="pt-[56px] pl-[56px]">
                <img src={instagram} className="top-[56px] left-[56px] absolute w-[76px] h-[76px]" alt="" />
              </div>
              <h1 className="text-white text-center px-32 text-[35px] pt-24">See everyday moments from your <span className="bg-gradient-to-r from-orange-700 via-red-600  to-purple-700 bg-clip-text text-transparent font-normal">close friends</span>.</h1>
              <img src={intro} className="w-[500px]" alt="Img Is Loading" />

            </section>

            <section className="bg-[#1F1F22] flex px-8 pt-24 pb-8 flex-col w-[42%] border-l-2 border-l-[#494d53]">
              <h1 className="text-white font-semibold text-[18px] absolute">Log into Instagram</h1>


              <div className="w-[100%] items-center gap-4 flex flex-col">

                <div className="w-[100%] items-center relative flex flex-col mt-12 justify-center" >
                  <input type="text" id="username" className="inputbar peer" placeholder=" " autoFocus />
                  <label htmlFor="username" className="labelbar">Mobile number,username or email</label>
                </div>

                <div className="w-[100%] items-center relative flex flex-col justify-center">
                  <input type="text" id="password" className="inputbar peer" placeholder=" " />
                  <label htmlFor="password" className="labelbar">Password</label>
                </div>

              </div>

              <div className="w-[100%] items-center flex flex-col">
                <button className="bg-[#123a6e] rounded-[25px] p-3 text-center mt-8 w-full text-[#737477] text-[16px] font-semibold"> Log in</button>
                <a href="" className="text-white font-semibold p-3 mt-4 rounded-[25px] w-full flex justify-center items-center hover:bg-white/10 transition-colors duration-100 ease-in-out">Forget password?</a>
                <button className="bg-transparent border border-[#50545b] rounded-[25px] p-3 text-center mt-12 w-full text-white text-[14px] font-semibold gap-2 flex justify-center hover:bg-white/10 transition-colors duration-100 ease-in-out"> <img src={facebook} alt="" />Log in with Facebook</button>
                <button className="bg-transparent border-2 border-[#4599ff] rounded-[25px] p-2 text-center mt-4 w-full text-[#4599ff]  text-[16px] font-semibold hover:bg-white/10 transition-colors duration-100 ease-in-out"> Create new account</button>
                <span className="flex flex-row gap-1 text-white text-[16px] pt-4 font-semibold "><img src={meta} />Meta</span>
              </div>

            </section>
          </section>

          <footer className="bg-[#0C1014] relative bottom-0 left-0 right-0 pb-16 flex-col flex border-t-2 border-t-[#262B30]">
            <p className="justify-center flex text-center flex-wrap px-64 gap-4 p-4 ">

              <a href="" className="tagsnew">Meta</a>
              <a href="" className="tagsnew">About</a>
              <a href="" className="tagsnew">Blog</a>
              <a href="" className="tagsnew">Jobs</a>
              <a href="" className="tagsnew">Help</a>
              <a href="" className="tagsnew">API</a>
              <a href="" className="tagsnew">Privacy</a>
              <a href="" className="tagsnew">Terms</a>
              <a href="" className="tagsnew">Locations</a>
              <a href="" className="tagsnew">Popular</a>
              <a href="" className="tagsnew">Instagram Lite</a>
              <a href="" className="tagsnew">Meta AI</a>
              <a href="" className="tagsnew">Threads</a>
              <a href="" className="tagsnew">Contact Uploading & Non-Users</a>
              <a href="" className="tagsnew">Meta Verified</a>

              <a href="" className="flex flex-row text-[12px] text-[#A8A8A8]">English (UK) <img src={downarrownew} className="w-4 h-4" /></a>
              <a href="" className="text-[12px] text-[#A8A8A8]">&copy; 2026 Instagram from Meta</a>

            </p>

          </footer>

        </main>
      )}
    </>
  );
}









