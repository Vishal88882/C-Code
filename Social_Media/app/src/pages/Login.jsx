import "../App.css";
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

                <main className="bg-[#1c2b33] px-2 h-fit min-h-screen">

                    <div className="pt-2">
                        <p className="text-[14px] text-[#cbd2d9] justify-center font-['Lexend'] flex flex-row ">English (US) </p>
                    </div>

                    <section className="flex flex-col pt-20 items-center">
                        <div className="p-2"><img src={instagram} className="w-16 h-16" /></div>

                        <div className="w-[100%] items-center gap-2 pt-8 flex flex-col">

                            <div className="w-[100%] items-center relative flex flex-col mt-12 justify-center" >
                                <input type="text" id="username" className="inputbar peer" placeholder=" " autoFocus />
                                <label htmlFor="username" className="labelbar">Username,email or mobile number</label>
                            </div>

                            <div className="w-[100%] items-center relative flex flex-col justify-center">
                                <input type="text" id="password" className="inputbar peer" placeholder=" " />
                                <label htmlFor="password" className="labelbar">Password</label>
                            </div>

                        </div>


                        <div className="w-[100%] items-center flex flex-col">
                            <button className="bg-[#0064e0] rounded-[25px] p-3 text-center mt-2 w-[90%] text-white text-[16px] font-semibold"> Log in</button>
                            <a href="" className="text-white font-semibold p-3 mt-2 rounded-[25px] w-[85%] flex justify-center items-center hover:bg-white/10 transition-colors duration-100 ease-in-out">Forget password?</a>
                            <button className="bg-transparent border-2 border-[#4599ff] rounded-[25px] p-2 text-center mt-40 w-[85%] text-[#4599ff]  text-[16px] font-semibold hover:bg-white/10 transition-colors duration-100 ease-in-out"> Create new account</button>
                            <span className="flex flex-row gap-1 text-white text-[16px] pt-4 font-semibold "><img src={meta} />Meta</span>
                        </div>

                    </section>
                </main>
            ) : width <= 1024 ? (


                <main className="bg-[#0C1014] h-fit min-h-screen">
                    <header className="bg-[#0C1014] p-4 border-b-2 border-b-[#494D53] justify-center flex">

                        <div className="p-2"><img src={instagram} className="w-20 h-20" /></div>

                    </header>

                    <section className="bg-[#1F1F22] flex pt-24 pb-8 flex-col  border-l-2 border-l-[#494d53]">
                        <h1 className="text-white font-semibold text-[18px] absolute pl-24">Log into Instagram</h1>


                        <div className="w-[100%]  items-center gap-4 flex flex-col">

                            <div className="w-[85%] items-center relative flex flex-col mt-12 justify-center" >
                                <input type="text" id="username" className="inputbar peer" placeholder=" " autoFocus />
                                <label htmlFor="username" className="labelbar">Mobile number,username or email</label>
                            </div>

                            <div className="w-[85%] items-center relative flex flex-col justify-center">
                                <input type="text" id="password" className="inputbar peer" placeholder=" " />
                                <label htmlFor="password" className="labelbar">Password</label>
                            </div>

                        </div>

                        <div className="w-[100%] items-center flex flex-col">
                            <button className="bg-[#123a6e] rounded-[25px] p-3 text-center mt-8 w-[78%] text-[#737477] text-[16px] font-semibold"> Log in</button>
                            <a href="" className="text-white font-semibold p-3 mt-4 rounded-[25px] w-[78%] flex justify-center items-center hover:bg-white/10 transition-colors duration-100 ease-in-out">Forget password?</a>
                            <button className="bg-transparent border border-[#50545b] rounded-[25px] p-3 text-center mt-12 w-[78%] text-white text-[14px] font-semibold gap-2 flex justify-center hover:bg-white/10 transition-colors duration-100 ease-in-out"> <img src={facebook} alt="" />Log in with Facebook</button>
                            <button className="bg-transparent border-2 border-[#4599ff] rounded-[25px] p-2 text-center mt-4 w-[78%] text-[#4599ff]  text-[16px] font-semibold hover:bg-white/10 transition-colors duration-100 ease-in-out"> Create new account</button>
                            <span className="flex flex-row gap-1 text-white text-[16px] pt-4 pb-20 font-semibold "><img src={meta} />Meta</span>
                        </div>

                    </section>

                    <footer className="bg-[#0C1014] relative bottom-0 left-0 right-0 flex-col pb-8 flex border-t-2 border-t-[#494D53]">
                        <p className="justify-center flex text-center flex-wrap gap-6 p-8 ">

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

                            <a href="" className="flex flex-row text-[12px] text-[#A8A8A8]">English (UK)<img src={downarrownew} className="w-4 h-4"/></a>
                            <a href="" className="text-[12px] text-[#A8A8A8]">&copy; 2026 Instagram from Meta</a>

                        </p>

                    </footer>

                </main>
            )
                : (
                    <main className="flex flex-col">
                        {/* <h1>Naruto Dark</h1> */}

                        <section className="flex flex-row ">

                            <section className="bg-[#0C1014] w-[58%] flex flex-col items-center pb-20">
                                <div className="pt-[56px] pl-[56px]">
                                    <img src={instagram} className="top-[56px] left-[56px] absolute w-[76px] h-[76px]" alt="" />
                                </div>
                                <h1 className="text-white text-center px-32 text-[35px] pt-24">See everyday moments from your <span className="bg-gradient-to-r from-orange-700 via-red-600 to-purple-700 bg-clip-text text-transparent font-normal">close friends</span>.</h1>
                                <img src={intro} className="w-[500px]" alt="Img Is Loading" />

                            </section>

                            <section className="bg-[#1F1F22] flex pt-24 pb-8 flex-col w-[42%] border-l-2 border-l-[#494d53]">
                                <h1 className="text-white font-semibold text-[18px] absolute pl-12">Log into Instagram</h1>


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
                                    <button className="bg-[#123a6e] rounded-[25px] p-3 text-center mt-8 w-[85%] text-[#737477]  text-[16px] font-semibold"> Log in</button>
                                    <a href="" className="text-white font-semibold p-3 mt-4 rounded-[25px] w-[85%] flex justify-center items-center hover:bg-white/10 transition-colors duration-100 ease-in-out">Forget password?</a>
                                    <button className="bg-transparent border border-[#50545b] rounded-[25px] p-3 text-center mt-12 w-[85%] text-white text-[14px] font-semibold gap-2 flex justify-center hover:bg-white/10 transition-colors duration-100 ease-in-out"> <img src={facebook} alt="" />Log in with Facebook</button>
                                    <button className="bg-transparent border-2 border-[#4599ff] rounded-[25px] p-2 text-center mt-4 w-[85%] text-[#4599ff]  text-[16px] font-semibold hover:bg-white/10 transition-colors duration-100 ease-in-out"> Create new account</button>
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









