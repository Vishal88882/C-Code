import "../App.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import closedeye from "../assets/closedeye.svg"
import openeye from "../assets/openeye.svg"
import downarrownew from "../assets/downarrownew.svg"
import meta from "../assets/meta.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import intro from "../assets/intro.webp"

import { useState, useEffect, useRef } from "react";

export default function App() {
    const [body, setbody] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)
    const [type, settype] = useState(true)
    const [isday, setisday] = useState(false)
    const [ismonth, setismonth] = useState(false)
    const [isyear, setisyear] = useState(false)
    const [selectedDay, setSelectedDay] = useState("Day")
    const [selectedMonth, setSelectedMonth] = useState("Month")
    const [selectedYear, setSelectedYear] = useState("Year")
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("");

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handletype() {
        settype(prev => !prev)
    }

    function handleisday() {
        setisday(prev => !prev)
    }
    function handleismonth() {
        setismonth(prev => !prev)
    }
    function handleisyear() {
        setisyear(prev => !prev)
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

    const days = []
    for (let i = 1; i < 32; i++) {
        days.push(i)
    }

    const years = []

    for (let i = 2026; i >= 1876; i--) {
        years.push(i)
    }

    return (
        <>
            {width <= 480 ? (

                <main className="bg-[#1c2b33] px-2 h-fit min-h-screen">

                    <div className="pt-12">
                        {type ? (
                            <p className="text-[22px] pl-4 font-semibold text-white  font-['Lexend'] flex flex-row ">What's your mobile number?</p>

                        ) : (
                            <p className="text-[22px] pl-4 font-semibold text-white  font-['Lexend'] flex flex-row ">What's your email address?</p>
                        )
                        }
                    </div>

                    <section className="flex flex-col pt-2 ">
                        <p className="text-[#edeeef] text-[16px] font-semibold pr-12 pl-4">Enter the {type ? "mobile number" : "email address"} where you can be contacted. No one will see this on your profile.</p>

                        <div className="w-full items-center gap-2 pt-4 flex flex-col">

                            <div className="w-full items-center relative flex flex-col justify-center" >
                                <input type="text" id="username" className="inputbar peer" placeholder=" " autoFocus />
                                {type ? (
                                    <label htmlFor="username" className="labelbar">Mobile number</label>
                                ) : (
                                    <label htmlFor="username" className="labelbar">Email address </label>

                                )}
                            </div>
                            <p className="text-[#edeeef] text-[14px] pl-4 pr-4">You may receive WhatsApp and SMS notifications from us. <span className="text-[#47a5fa] font-semibold"><a href="">Learn more</a></span></p>

                        </div>


                        <div className="w-full items-center flex flex-col">
                            <button className="bg-[#0064e0] rounded-[25px] p-3 text-center mt-2 w-[90%] text-white text-[16px] font-semibold">Next</button>

                            {type ? (
                                <button href="" className="signupType" onClick={handletype}>Sign up with email</button>
                            ) : (
                                <button href="" className="signupType" onClick={handletype}>Sign up with phone number</button>
                            )}
                            <a href="" className="fixed bottom-12 mx-auto text-[#47a5fa] font-semibold">I already have an account</a>
                        </div>
                    </section>
                </main>

            ) : (

                <main className="flex flex-col bg-[#1F1F22] justify-center items-center" onClick={(e) => { setisday(false); setismonth(false); setisyear(false) }}>
                    {/* <h1>Naruto Dark</h1> */}

                    <section className="flex flex-row h-fit px-4 min-h-screen min-w-[320px] max-w-[550px]">

                        <section className=" flex pt-8 flex-col w-full">


                            <div className="w-full flex flex-col">
                                <img src={downarrownew} className="rotate-90 w-8 h-8 " />
                                <span className="flex flex-row gap-1 text-white text-[16px] font-semibold pt-2 "><img src={meta} />Meta</span>
                                <span className="text-white font-semibold text-[28px] pt-2 ">Get started on Instagram</span>
                                <span className="text-white text-[17px] ">Sign up to see photos and videos from your friends.</span>
                            </div>


                            <div className="w-full gap-2 flex flex-col">


                                <p className="text-white font-semibold text-[18px] mt-2">Mobile number or email address</p>
                                <div className="w-full relative flex flex-col " >
                                    <input type="text" id="username" className="inputbar peer" placeholder=" " autoFocus />
                                    <label htmlFor="username" className="labelbar">Mobile number or email address
                                    </label>
                                </div>

                                <p className="text-white font-semibold ">You may receive notifications from us. <span className=" text-[#48A2F4] hover:underline">Learn why we ask for your contact information</span></p>


                                <p className="text-white font-semibold text-[20px]">Password</p>
                                <div className="w-full relative flex flex-col ">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="inputbar peer"
                                        placeholder=" "
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password" className="labelbar">Password</label>         

                                    {password ? (
                                       <img src={closedeye} onClick={() => {setShowPassword(!showPassword); setPassword(false)} } className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"/>
                                    ) : (
                                       <img src={openeye} onClick={() => {setShowPassword(!showPassword); setPassword(true)} } className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"/>
                                    )}
                                </div>


                                <p className="text-white font-semibold flex flex-row items-center text-[20px] gap-1 ">Date of Birth<HiOutlineQuestionMarkCircle className="text-white text-xl" /></p>
                                <div className="w-full relative grid grid-cols-3 flex-row gap-4">
                                    <div>
                                        <p id="Day" className="DOB" onClick={(e) => { e.stopPropagation(); handleisday(); setismonth(false); setisyear(false) }}><p>{selectedDay || "Day"}</p><img src={downarrownew} /></p>
                                        {isday && (
                                            <>
                                                <div className="custom-scroll absolute w-40 z-[800] flex flex-col overflow-hidden rounded-[12px] mt-2 max-h-64 overflow-y-auto bg-[#343339] text-white shadow-lg">
                                                    {days.map((day) => (
                                                        <p
                                                            key={day}
                                                            onClick={() => setSelectedDay(day)}
                                                            className="cursor-pointer pl-4 p-2 bg-[#343339] hover:bg-[#525159]"
                                                        >
                                                            {day}
                                                        </p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div>
                                        <p id="Month" className="DOB " onClick={(e) => { e.stopPropagation(); handleismonth(); setisday(false); setisyear(false); }}>{selectedMonth || "Month"}<img src={downarrownew} /></p>
                                        {ismonth && (
                                            <>
                                                <div className="custom-scroll absolute w-40 z-[800] flex flex-col overflow-hidden rounded-[12px] mt-2 max-h-64 overflow-y-auto bg-[#343339] text-white shadow-lg">
                                                    {months.map((month) => (
                                                        <p
                                                            key={month}
                                                            onClick={() => setSelectedMonth(month)}
                                                            className="cursor-pointer pl-4 p-2 bg-[#343339] hover:bg-[#525159]"
                                                        >
                                                            {month}
                                                        </p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div>
                                        <p id="Year" className="DOB " onClick={(e) => { e.stopPropagation(); handleisyear(); setisday(false); setismonth(false) }}>{selectedYear || "Year"}<img src={downarrownew} /></p>
                                        {isyear && (
                                            <>
                                                <div className="custom-scroll absolute w-40 z-[800] flex flex-col overflow-hidden rounded-[12px] mt-2 max-h-64 overflow-y-auto bg-[#343339] text-white shadow-lg">
                                                    {years.map((year) => (
                                                        <p
                                                            key={year}
                                                            onClick={() => setSelectedYear(year)}
                                                            className="cursor-pointer pl-4 p-2 bg-[#343339] hover:bg-[#525159]"
                                                        >
                                                            {year}
                                                        </p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <p className="text-white font-semibold text-[20px] ">Name</p>
                                <div className="w-full relative flex flex-col ">
                                    <input type="text" id="name" className="inputbar peer" placeholder=" " />
                                    <label htmlFor="name" className="labelbar">Full name</label>
                                </div>

                                <p className="text-white font-semibold text-[20px]">Username</p>
                                <div className="w-full relative flex flex-col r">
                                    <input type="text" id="user" className="inputbar peer" placeholder=" " />
                                    <label htmlFor="user" className="labelbar">Username</label>
                                </div>
                                <p className="text-white font-semibold">People who use our service may have uploaded your contact information to Instagram. <span className=" text-[#48A2F4] hover:underline">Learn more</span>.</p>
                                <p className="text-white font-semibold">By tapping Submit, you agree to create an account and to Instagram's <span className=" text-[#48A2F4] hover:underline">Terms</span>,<span className=" text-[#48A2F4] hover:underline">Privacy Policy</span> and <span className=" text-[#48A2F4] hover:underline">Cookies Policy</span>.</p>
                                <p className="text-white font-semibold">The <span className=" text-[#48A2F4] hover:underline"> Privacy Policy </span>describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads. </p>

                            </div>

                            <div className="w-full  flex flex-col">
                                <button className="bg-[#0064E0] rounded-[25px] p-3 text-center mt-8  text-white text-[18px] font-semibold"> Submit </button>
                                <button className="bg-transparent border-2 border-[#41444A] rounded-[25px] p-2 text-center mt-4  text-[#D4D5D8]  text-[16px] font-semibold hover:bg-white/10 transition-colors duration-100 ease-in-out"> I already have an account</button>
                            </div>

                        </section>
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
            )}
        </>
    );
}









