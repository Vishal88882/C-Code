import "../App.css";
import { useNavigate } from "react-router-dom";
import downarrownew from "../assets/downarrownew.svg"

import { useState, useEffect, useRef } from "react";

export default function App() {
    const [width, setWidth] = useState(window.innerWidth)
    const [type, settype] = useState(true)
    const navigate = useNavigate();


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (width > 480) {
            navigate("/Signup");
        }
    }, [width, navigate]);
    console.log(width)

    return (
        <>{width <= 480 ? (

            <main className="bg-[#1c2b33] px-2 h-fit min-h-screen">
                <div className="pt-12">
                    <p className="text-[22px] pl-4 font-semibold text-white  font-['Lexend'] flex flex-row ">What's your date of birth?</p>
                </div>
                <section className="flex flex-col pt-2 ">
                    <p className="text-[#edeeef] text-[16px] font-semibold pr-12 pl-4">use your own date of birth, even if this account for a busisness,a pet or something else.No one will see this unless you choose to share it.<span className=" text-[#48A2F4] hover:underline"> Why do i need to provide my date of birth?</span></p>

                    <div className="w-full items-center gap-2 pt-4 flex flex-col">

                        <div className="w-full items-center relative flex flex-col justify-center" >
                            <input type="date" id="username" className="inputbar peer" placeholder=" " autoFocus />
                            <label htmlFor="username" className="labelbar">Date of birth(0 years of old)</label>
                        </div>
                    </div>

                    <div className="w-full items-center flex flex-col">
                        <button className="bg-[#0064e0] rounded-[25px] p-3 text-center mt-2 w-[90%] text-white text-[16px] font-semibold">Next</button>
                        <a href="" className="pt-80 pb-16 text-[#47a5fa] font-semibold">I already have an account</a>
                    </div>
                </section>
                <footer className="bg-[#1F1F22] relative bottom-0 left-0 right-0 pb-16 pt-8 flex-col flex">
                    <p className=" flex  flex-wrap justify-center items-center gap-4 p-4 ">

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
            <div></div>
        )}
        </>
    );
}









